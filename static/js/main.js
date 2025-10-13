---
---
$(function() {
  deadlineByConf = {};

  {% for conf in site.data.conferences %}
  // {{ conf.name }} {{ conf.year }}
  {% if conf.deadline[0] == "TBA" %}
  //{% assign conf_id = conf.name | append: conf.year | append: '-0' | slugify %}
  {% assign conf_type = conf.tags | join: "-" | slugify %}
  {% assign conf_id = conf.name | append: conf.year | append: '-0' | append: conf_type | slugify %}
  $('#{{ conf_id }} .timer').html("TBA");
  $('#{{ conf_id }} .deadline-time').html("TBA");
  deadlineByConf["{{ conf_id }}"] = null;

  {% else %}
  var rawDeadlines = {{ conf.deadline | jsonify }} || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = {{ conf.year }};
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    {% if conf.timezone %}
    var deadline = moment.tz(rawDeadline, "{{ conf.timezone }}");
    {% else %}
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    {% endif %}

    // post-process date
    if (deadline.minutes() === 0) {
      deadline.subtract(1, 'seconds');
    }
    if (deadline.minutes() === 59) {
      deadline.seconds(59);
    }
    parsedDeadlines.push(deadline);
  }
  // due to pop before; we need to reverse such that the i index later matches
  // the right parsed deadline
  parsedDeadlines.reverse();

  {% assign range_end = conf.deadline.size | minus: 1 %}
  {% for i in (0..range_end) %}
  //{% assign conf_id = conf.name | append: conf.year | append: '-' | append: i | slugify %}
  {% assign conf_type = conf.tags | join: "-" | slugify %}
  {% assign conf_id = conf.name | append: conf.year | append: '-' | append: conf_type | append: '-' | append: i | slugify %}
  var deadlineId = {{ i }};
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline
          if (diff <= 0) {
             $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#{{ conf_id }} .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#{{ conf_id }}').addClass('past');
      }
      $('#{{ conf_id }} .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["{{ conf_id }}"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  {% endfor %}
  {% endif %}
  {% endfor %}

  // Reorder list
  var today = moment();
  var confs = $('.conf').detach();
  
  confs.sort(function(a, b) {
    var aDeadline = deadlineByConf[a.id];
    var bDeadline = deadlineByConf[b.id];
    var aDiff = today.diff(aDeadline);
    var bDiff = today.diff(bDeadline);
    if (aDiff < 0 && bDiff > 0) {
      return -1;
    }
    if (aDiff > 0 && bDiff < 0) {
      return 1;
    }
    return bDiff - aDiff;
  });
  
  var pastConfs = []; 
  var upcomingConfs = []; 
   
  confs.each(function() {
    var conf = $(this);

    if (conf.hasClass("past")) {
      pastConfs.push(conf);
    } else {
      upcomingConfs.push(conf);
    }
  }); 
   
  //$('.conf-container').append(confs); 
  $('.conf-container').append(upcomingConfs); 
  $('#past-events-list').append(pastConfs);  
   
  // Toggle past events visibility
  $(".past-deadlines").click(function() {
    $("#past-events-list").slideToggle();
    $(".glyphicon", this).toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
  });
   
  $(document).ready(function () {
    $(".conf").each(function () {
        let conf = $(this);
        let confTitle = conf.find(".conf-title");
        let confComment = conf.find(".conf-comment");

        const tagMappings = {
            "EXP": () => {
                confTitle.text(confTitle.text() + " (Expected)");
                conf.find(".conf-date").html('<i class="fas fa-calendar-day"></i> TBA');
                conf.find(".conf-place").html('<i class="fas fa-map-marker-alt"></i> TBA');
                conf.find(".conf-rebut").text("TBA");
                confComment.text("CFP yet to be announced");
            },
            "EXPCFP": () => {
                confTitle.text(confTitle.text() + " (Expected)");
                confComment.text("CFP yet to be announced");
            },
            "JRN": () => {
                confTitle.text("(Journal) " + confTitle.text());
                let portalLink = conf.data("portal") || confTitle.attr("href");
                let newComment = (confComment.text().trim() ? confComment.text().trim() + " " : "") +
                                 `<a href="${portalLink}" target="_blank">Submission Portal</a>`;
                confComment.html(newComment);
            },
            "WK": () => {
                confTitle.text("(Workshop) " + confTitle.text());

                let conferenceText = conf.find(".conference").text().trim();
                if (conferenceText) {
                    let existingComment = confComment.text().trim();
                    let newComment = existingComment ? existingComment + " | Co-located with " + conferenceText : "Co-located with " + conferenceText;
                    confComment.text(newComment);
                }
            },
            "PS": () => confTitle.text("(Poster) " + confTitle.text()),
            "MISC": () => confTitle.text("(Misc.) " + confTitle.text()),
            "CRS": () => confTitle.text("(School) " + confTitle.text())
        };

        Object.keys(tagMappings).forEach(tag => {
            if (conf.hasClass(tag)) {
                tagMappings[tag]();
            }
        });
    });
  });


  // Set checkboxes
  // Read filter data from Jekyll
  var filter1 = {{ site.data.filters.filter1 | jsonify }};
  var filter2 = {{ site.data.filters.filter2 | jsonify }};
  var filter3 = {{ site.data.filters.filter3 | jsonify }};

  // Combine all filters into a single array
  var all_tags = [];
  var toggle_status = {};

  function processFilters(filters) {
    for (var i = 0; i < filters.length; i++) {
      all_tags.push(filters[i]['tag']);
      toggle_status[filters[i]['tag']] = false;
    }
  }

  processFilters(filter1);
  processFilters(filter2);
  processFilters(filter3);

  // Retrieve stored preferences
  var tags = store.get('{{ site.domain }}');
  if (tags === undefined) {
    tags = []; // Default to all unchecked
  }

  // Apply stored preferences to checkboxes
  for (var i = 0; i < all_tags.length; i++) {
      var tag = all_tags[i];
      var isChecked = tags.includes(tag); // Check if the tag is stored
      $('#' + tag + '-checkbox').prop('checked', isChecked);
      toggle_status[tag] = isChecked;
  }

  // Save updated selection to local storage
  store.set('{{ site.domain }}', tags);

   
   
  // Track selected filters
  let selectedFilters = {
    filter1: new Set(),
    filter2: new Set(),
    filter3: new Set()
  };

  function updateConfList() {
    $(".conf").each(function () {
      let conf = $(this);
      let show = true;

      // Check each filter group
      Object.keys(selectedFilters).forEach(filterGroup => {
        if (selectedFilters[filterGroup].size > 0) {
          let hasTag = false;
          selectedFilters[filterGroup].forEach(tag => {
            if (conf.hasClass(tag)) {
              hasTag = true;
            }
          });
          if (!hasTag) {
            show = false;
          }
        }
      });

      // Show or hide based on filter matching
      if (show) {
        conf.show();
      } else {
        conf.hide();
      }
    });
  }

  // Handle checkbox changes
  $(".filter-checkbox").change(function () {
    let tag = $(this).attr("id").replace("-checkbox", "");
    let filterGroup = $(this).data("filter-group");

    if ($(this).is(":checked")) {
      selectedFilters[filterGroup].add(tag);
    } else {
      selectedFilters[filterGroup].delete(tag);
    }

    updateConfList();
  });

  // Handle "Clear Filters" button click
  $("#clear-filters").click(function () {
    // Uncheck all checkboxes
    $(".filter-checkbox").prop("checked", false);

    // Reset the selected filters
    selectedFilters = {
      filter1: new Set(),
      filter2: new Set(),
      filter3: new Set()
    };

    updateConfList();
  });

  updateConfList(); // Initial display
});
