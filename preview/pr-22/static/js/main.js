$(function() {
  deadlineByConf = {};

  
  // ACM CCS 2026
  
  var rawDeadlines = ["2026-01-14 23:59","2026-04-29 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-ccs2026-pract-applied-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-ccs2026-pract-applied-cnf-coreas-0').addClass('past');
      }
      $('#acm-ccs2026-pract-applied-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-ccs2026-pract-applied-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-ccs2026-pract-applied-cnf-coreas-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-ccs2026-pract-applied-cnf-coreas-1').addClass('past');
      }
      $('#acm-ccs2026-pract-applied-cnf-coreas-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-ccs2026-pract-applied-cnf-coreas-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM STOC 2026
  
  var rawDeadlines = ["2025-11-04 19:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-stoc2026-theory-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-stoc2026-theory-cnf-coreas-0').addClass('past');
      }
      $('#acm-stoc2026-theory-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-stoc2026-theory-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // CRYPTO 2026
  
  var rawDeadlines = ["2026-02-12 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "PT");
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#crypto2026-theory-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#crypto2026-theory-cnf-coreas-0').addClass('past');
      }
      $('#crypto2026-theory-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["crypto2026-theory-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // EUROCRYPT 2026
  
  var rawDeadlines = ["2025-10-02 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#eurocrypt2026-theory-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#eurocrypt2026-theory-cnf-coreas-0').addClass('past');
      }
      $('#eurocrypt2026-theory-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["eurocrypt2026-theory-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE FOCS 2026
  
  var rawDeadlines = ["2026-04-01 16:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "EDT");
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-focs2026-theory-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-focs2026-theory-cnf-coreas-0').addClass('past');
      }
      $('#ieee-focs2026-theory-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-focs2026-theory-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE INFOCOM 2027
  
  var rawDeadlines = ["2026-07-24 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-infocom2027-pract-applied-cnf-coreas-expcfp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-infocom2027-pract-applied-cnf-coreas-expcfp-0').addClass('past');
      }
      $('#ieee-infocom2027-pract-applied-cnf-coreas-expcfp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-infocom2027-pract-applied-cnf-coreas-expcfp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE S&P (Oakland) 2027
  
  var rawDeadlines = ["2026-06-11 23:59","2026-11-17 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-s-p-oakland-2027-pract-applied-sok-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-s-p-oakland-2027-pract-applied-sok-cnf-coreas-0').addClass('past');
      }
      $('#ieee-s-p-oakland-2027-pract-applied-sok-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-s-p-oakland-2027-pract-applied-sok-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-s-p-oakland-2027-pract-applied-sok-cnf-coreas-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-s-p-oakland-2027-pract-applied-sok-cnf-coreas-1').addClass('past');
      }
      $('#ieee-s-p-oakland-2027-pract-applied-sok-cnf-coreas-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-s-p-oakland-2027-pract-applied-sok-cnf-coreas-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // NDSS 2027
  
  var rawDeadlines = ["2026-05-06 23:59","2026-08-19 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ndss2027-pract-applied-sok-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ndss2027-pract-applied-sok-cnf-coreas-0').addClass('past');
      }
      $('#ndss2027-pract-applied-sok-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ndss2027-pract-applied-sok-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ndss2027-pract-applied-sok-cnf-coreas-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ndss2027-pract-applied-sok-cnf-coreas-1').addClass('past');
      }
      $('#ndss2027-pract-applied-sok-cnf-coreas-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ndss2027-pract-applied-sok-cnf-coreas-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM PODC 2026
  
  var rawDeadlines = ["2026-02-16 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-podc2026-theory-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-podc2026-theory-cnf-coreas-0').addClass('past');
      }
      $('#acm-podc2026-theory-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-podc2026-theory-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM SIGMOD+PODS (PODS) 2027
  
  var rawDeadlines = ["2026-05-30 23:59","2026-12-10 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-sigmod-pods-pods-2027-theory-pract-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-sigmod-pods-pods-2027-theory-pract-cnf-coreas-0').addClass('past');
      }
      $('#acm-sigmod-pods-pods-2027-theory-pract-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-sigmod-pods-pods-2027-theory-pract-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-sigmod-pods-pods-2027-theory-pract-cnf-coreas-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-sigmod-pods-pods-2027-theory-pract-cnf-coreas-1').addClass('past');
      }
      $('#acm-sigmod-pods-pods-2027-theory-pract-cnf-coreas-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-sigmod-pods-pods-2027-theory-pract-cnf-coreas-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM SIGMOD+PODS (SIGMOD) 2027
  
  var rawDeadlines = ["2026-01-17 23:59","2026-04-17 23:59","2026-08-17 23:59","2026-10-17 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-0').addClass('past');
      }
      $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-1').addClass('past');
      }
      $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 2;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-2 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-2').addClass('past');
      }
      $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-2 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-2"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 3;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-3 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-3').addClass('past');
      }
      $('#acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-3 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-sigmod-pods-sigmod-2027-theory-pract-cnf-coreas-3"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // USENIX Security 2027
  
  var rawDeadlines = ["2026-08-25 23:59","2027-01-26 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#usenix-security2027-pract-applied-sok-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#usenix-security2027-pract-applied-sok-cnf-coreas-0').addClass('past');
      }
      $('#usenix-security2027-pract-applied-sok-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["usenix-security2027-pract-applied-sok-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#usenix-security2027-pract-applied-sok-cnf-coreas-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#usenix-security2027-pract-applied-sok-cnf-coreas-1').addClass('past');
      }
      $('#usenix-security2027-pract-applied-sok-cnf-coreas-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["usenix-security2027-pract-applied-sok-cnf-coreas-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // The Web Conference 2026
  
  var rawDeadlines = ["2025-10-07 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#the-web-conference2026-pract-applied-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#the-web-conference2026-pract-applied-cnf-coreas-0').addClass('past');
      }
      $('#the-web-conference2026-pract-applied-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["the-web-conference2026-pract-applied-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // VLDB 2026
  
  var rawDeadlines = ["2025-04-01 16:59","2025-05-01 16:59","2025-06-01 16:59","2025-07-01 16:59","2025-08-01 16:59","2025-09-01 16:59","2025-10-01 16:59","2025-11-01 16:59","2025-12-01 16:59","2026-01-01 16:59","2026-02-01 16:59","2026-03-01 16:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "PT");
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-0').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-1').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 2;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-2 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-2').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-2 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-2"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 3;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-3 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-3').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-3 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-3"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 4;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-4 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-4').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-4 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-4"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 5;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-5 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-5').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-5 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-5"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 6;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-6 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-6').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-6 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-6"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 7;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-7 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-7').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-7 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-7"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 8;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-8 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-8').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-8 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-8"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 9;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-9 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-9').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-9 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-9"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 10;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-10 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-10').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-10 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-10"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 11;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-11 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb2026-theory-pract-applied-cnf-coreas-11').addClass('past');
      }
      $('#vldb2026-theory-pract-applied-cnf-coreas-11 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb2026-theory-pract-applied-cnf-coreas-11"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // VLDB (Industrial Track) 2026
  
  var rawDeadlines = ["2026-03-02 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#vldb-industrial-track-2026-theory-pract-applied-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#vldb-industrial-track-2026-theory-pract-applied-cnf-coreas-0').addClass('past');
      }
      $('#vldb-industrial-track-2026-theory-pract-applied-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["vldb-industrial-track-2026-theory-pract-applied-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM ASIACCS 2027
  
  var rawDeadlines = ["2026-08-21 23:59","2026-12-11 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-asiaccs2027-pract-cnf-sok-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-asiaccs2027-pract-cnf-sok-corea-0').addClass('past');
      }
      $('#acm-asiaccs2027-pract-cnf-sok-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-asiaccs2027-pract-cnf-sok-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-asiaccs2027-pract-cnf-sok-corea-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-asiaccs2027-pract-cnf-sok-corea-1').addClass('past');
      }
      $('#acm-asiaccs2027-pract-cnf-sok-corea-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-asiaccs2027-pract-cnf-sok-corea-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACSAC 2026
  
  var rawDeadlines = ["2026-05-26 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acsac2026-pract-applied-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acsac2026-pract-applied-cnf-corea-0').addClass('past');
      }
      $('#acsac2026-pract-applied-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acsac2026-pract-applied-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ASIACRYPT 2026
  
  var rawDeadlines = ["2026-05-22 11:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#asiacrypt2026-theory-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#asiacrypt2026-theory-cnf-corea-0').addClass('past');
      }
      $('#asiacrypt2026-theory-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["asiacrypt2026-theory-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // CHES 2026
  
  var rawDeadlines = ["2025-07-15 23:59","2025-10-15 23:59","2026-01-15 23:59","2026-04-15 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ches2026-pract-applied-sok-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ches2026-pract-applied-sok-cnf-corea-0').addClass('past');
      }
      $('#ches2026-pract-applied-sok-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ches2026-pract-applied-sok-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ches2026-pract-applied-sok-cnf-corea-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ches2026-pract-applied-sok-cnf-corea-1').addClass('past');
      }
      $('#ches2026-pract-applied-sok-cnf-corea-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ches2026-pract-applied-sok-cnf-corea-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 2;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ches2026-pract-applied-sok-cnf-corea-2 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ches2026-pract-applied-sok-cnf-corea-2').addClass('past');
      }
      $('#ches2026-pract-applied-sok-cnf-corea-2 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ches2026-pract-applied-sok-cnf-corea-2"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 3;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ches2026-pract-applied-sok-cnf-corea-3 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ches2026-pract-applied-sok-cnf-corea-3').addClass('past');
      }
      $('#ches2026-pract-applied-sok-cnf-corea-3 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ches2026-pract-applied-sok-cnf-corea-3"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // DISC 2026
  
  var rawDeadlines = ["2026-06-01 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#disc2026-theory-pract-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#disc2026-theory-pract-cnf-corea-0').addClass('past');
      }
      $('#disc2026-theory-pract-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["disc2026-theory-pract-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ESORICS 2026
  
  var rawDeadlines = ["2026-01-09 23:59","2026-04-21 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#esorics2026-pract-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#esorics2026-pract-cnf-corea-0').addClass('past');
      }
      $('#esorics2026-pract-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["esorics2026-pract-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#esorics2026-pract-cnf-corea-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#esorics2026-pract-cnf-corea-1').addClass('past');
      }
      $('#esorics2026-pract-cnf-corea-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["esorics2026-pract-cnf-corea-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // EuroSys 2026
  
  var rawDeadlines = ["2025-05-15 23:59","2025-09-25 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#eurosys2026-theory-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#eurosys2026-theory-cnf-corea-0').addClass('past');
      }
      $('#eurosys2026-theory-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["eurosys2026-theory-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#eurosys2026-theory-cnf-corea-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#eurosys2026-theory-cnf-corea-1').addClass('past');
      }
      $('#eurosys2026-theory-cnf-corea-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["eurosys2026-theory-cnf-corea-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // FC 2026
  
  var rawDeadlines = ["2025-09-16 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#fc2026-pract-cnf-sok-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#fc2026-pract-cnf-sok-corea-0').addClass('past');
      }
      $('#fc2026-pract-cnf-sok-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["fc2026-pract-cnf-sok-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE CSF 2026
  
  var rawDeadlines = ["2025-07-24 23:59","2025-10-09 23:59","2026-01-29 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-csf2026-theory-cnf-corea-sok-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-csf2026-theory-cnf-corea-sok-0').addClass('past');
      }
      $('#ieee-csf2026-theory-cnf-corea-sok-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-csf2026-theory-cnf-corea-sok-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-csf2026-theory-cnf-corea-sok-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-csf2026-theory-cnf-corea-sok-1').addClass('past');
      }
      $('#ieee-csf2026-theory-cnf-corea-sok-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-csf2026-theory-cnf-corea-sok-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 2;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-csf2026-theory-cnf-corea-sok-2 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-csf2026-theory-cnf-corea-sok-2').addClass('past');
      }
      $('#ieee-csf2026-theory-cnf-corea-sok-2 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-csf2026-theory-cnf-corea-sok-2"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE Euro S&P 2026
  
  var rawDeadlines = ["2025-11-20 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-euro-s-p2026-pract-applied-sok-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-euro-s-p2026-pract-applied-sok-cnf-corea-0').addClass('past');
      }
      $('#ieee-euro-s-p2026-pract-applied-sok-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-euro-s-p2026-pract-applied-sok-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE ICDCS 2026
  
  var rawDeadlines = ["2026-01-14 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-icdcs2026-theory-pract-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-icdcs2026-theory-pract-cnf-corea-0').addClass('past');
      }
      $('#ieee-icdcs2026-theory-pract-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-icdcs2026-theory-pract-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ITCS 2026
  
  var rawDeadlines = ["2025-09-06 11:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#itcs2026-theory-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#itcs2026-theory-cnf-corea-0').addClass('past');
      }
      $('#itcs2026-theory-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["itcs2026-theory-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // PETS 2027
  
  var rawDeadlines = ["2026-05-31 23:59","2026-08-31 23:59","2026-11-30 23:59","2027-02-28 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#pets2027-pract-applied-sok-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#pets2027-pract-applied-sok-cnf-corea-0').addClass('past');
      }
      $('#pets2027-pract-applied-sok-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["pets2027-pract-applied-sok-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#pets2027-pract-applied-sok-cnf-corea-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#pets2027-pract-applied-sok-cnf-corea-1').addClass('past');
      }
      $('#pets2027-pract-applied-sok-cnf-corea-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["pets2027-pract-applied-sok-cnf-corea-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 2;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#pets2027-pract-applied-sok-cnf-corea-2 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#pets2027-pract-applied-sok-cnf-corea-2').addClass('past');
      }
      $('#pets2027-pract-applied-sok-cnf-corea-2 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["pets2027-pract-applied-sok-cnf-corea-2"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 3;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#pets2027-pract-applied-sok-cnf-corea-3 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#pets2027-pract-applied-sok-cnf-corea-3').addClass('past');
      }
      $('#pets2027-pract-applied-sok-cnf-corea-3 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["pets2027-pract-applied-sok-cnf-corea-3"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // SOUPS 2026
  
  var rawDeadlines = ["2026-02-19 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#soups2026-pract-cnf-sok-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#soups2026-pract-cnf-sok-corea-0').addClass('past');
      }
      $('#soups2026-pract-cnf-sok-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["soups2026-pract-cnf-sok-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACISP 2026
  
  var rawDeadlines = ["2025-11-27 23:59","2026-02-26 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acisp2026-pract-applied-sok-cnf-coreb-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acisp2026-pract-applied-sok-cnf-coreb-0').addClass('past');
      }
      $('#acisp2026-pract-applied-sok-cnf-coreb-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acisp2026-pract-applied-sok-cnf-coreb-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acisp2026-pract-applied-sok-cnf-coreb-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acisp2026-pract-applied-sok-cnf-coreb-1').addClass('past');
      }
      $('#acisp2026-pract-applied-sok-cnf-coreb-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acisp2026-pract-applied-sok-cnf-coreb-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM WiSec 2026
  
  var rawDeadlines = ["2025-11-18 23:59","2026-03-03 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-wisec2026-applied-cnf-coreb-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-wisec2026-applied-cnf-coreb-0').addClass('past');
      }
      $('#acm-wisec2026-applied-cnf-coreb-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-wisec2026-applied-cnf-coreb-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-wisec2026-applied-cnf-coreb-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-wisec2026-applied-cnf-coreb-1').addClass('past');
      }
      $('#acm-wisec2026-applied-cnf-coreb-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-wisec2026-applied-cnf-coreb-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACNS 2027
  
  var rawDeadlines = ["2026-09-26 23:59","2027-01-23 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acns2027-pract-applied-sok-cnf-coreb-expcfp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acns2027-pract-applied-sok-cnf-coreb-expcfp-0').addClass('past');
      }
      $('#acns2027-pract-applied-sok-cnf-coreb-expcfp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acns2027-pract-applied-sok-cnf-coreb-expcfp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acns2027-pract-applied-sok-cnf-coreb-expcfp-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acns2027-pract-applied-sok-cnf-coreb-expcfp-1').addClass('past');
      }
      $('#acns2027-pract-applied-sok-cnf-coreb-expcfp-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acns2027-pract-applied-sok-cnf-coreb-expcfp-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ARES 2026
  
  var rawDeadlines = ["2026-03-09 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ares2026-pract-sok-cnf-coreb-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ares2026-pract-sok-cnf-coreb-0').addClass('past');
      }
      $('#ares2026-pract-sok-cnf-coreb-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ares2026-pract-sok-cnf-coreb-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // CANS 2026
  
  var rawDeadlines = ["2026-06-10 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#cans2026-pract-cnf-coreb-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#cans2026-pract-cnf-coreb-0').addClass('past');
      }
      $('#cans2026-pract-cnf-coreb-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["cans2026-pract-cnf-coreb-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // CT-RSAC 2026
  
  var rawDeadlines = ["2025-10-24 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ct-rsac2026-theory-pract-cnf-coreb-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ct-rsac2026-theory-pract-cnf-coreb-0').addClass('past');
      }
      $('#ct-rsac2026-theory-pract-cnf-coreb-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ct-rsac2026-theory-pract-cnf-coreb-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE ISIT 2026
  
  var rawDeadlines = ["2026-01-16 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-isit2026-theory-cnf-coreb-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-isit2026-theory-cnf-coreb-0').addClass('past');
      }
      $('#ieee-isit2026-theory-cnf-coreb-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-isit2026-theory-cnf-coreb-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE ITW 2025
  
  var rawDeadlines = ["2025-04-18 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-itw2025-theory-cnf-coreb-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-itw2025-theory-cnf-coreb-0').addClass('past');
      }
      $('#ieee-itw2025-theory-cnf-coreb-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-itw2025-theory-cnf-coreb-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // PKC 2026
  
  var rawDeadlines = ["2025-10-24 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#pkc2026-theory-cnf-coreb-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#pkc2026-theory-cnf-coreb-0').addClass('past');
      }
      $('#pkc2026-theory-cnf-coreb-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["pkc2026-theory-cnf-coreb-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // SAC 2026
  
  var rawDeadlines = ["2026-02-02 23:59","2026-05-11 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#sac2026-theory-pract-cnf-coreb-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#sac2026-theory-pract-cnf-coreb-0').addClass('past');
      }
      $('#sac2026-theory-pract-cnf-coreb-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["sac2026-theory-pract-cnf-coreb-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#sac2026-theory-pract-cnf-coreb-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#sac2026-theory-pract-cnf-coreb-1').addClass('past');
      }
      $('#sac2026-theory-pract-cnf-coreb-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["sac2026-theory-pract-cnf-coreb-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // TCC 2026
  
  var rawDeadlines = ["2025-05-19 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#tcc2026-theory-cnf-coreb-expcfp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#tcc2026-theory-cnf-coreb-expcfp-0').addClass('past');
      }
      $('#tcc2026-theory-cnf-coreb-expcfp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["tcc2026-theory-cnf-coreb-expcfp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // SECRYPT 2026
  
  var rawDeadlines = ["2026-03-23 23:59","2026-04-16 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#secrypt2026-theory-pract-pos-cnf-corec-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#secrypt2026-theory-pract-pos-cnf-corec-0').addClass('past');
      }
      $('#secrypt2026-theory-pract-pos-cnf-corec-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["secrypt2026-theory-pract-pos-cnf-corec-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#secrypt2026-theory-pract-pos-cnf-corec-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#secrypt2026-theory-pract-pos-cnf-corec-1').addClass('past');
      }
      $('#secrypt2026-theory-pract-pos-cnf-corec-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["secrypt2026-theory-pract-pos-cnf-corec-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ICDCN 2027
  
  var rawDeadlines = ["2026-07-30 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#icdcn2027-theory-pract-cnf-coren-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#icdcn2027-theory-pract-cnf-coren-0').addClass('past');
      }
      $('#icdcn2027-theory-pract-cnf-coren-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["icdcn2027-theory-pract-cnf-coren-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ICISS 2025
  
  var rawDeadlines = ["2025-07-25 23:59","2025-08-10 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#iciss2025-pract-applied-cnf-coren-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#iciss2025-pract-applied-cnf-coren-0').addClass('past');
      }
      $('#iciss2025-pract-applied-cnf-coren-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["iciss2025-pract-applied-cnf-coren-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#iciss2025-pract-applied-cnf-coren-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#iciss2025-pract-applied-cnf-coren-1').addClass('past');
      }
      $('#iciss2025-pract-applied-cnf-coren-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["iciss2025-pract-applied-cnf-coren-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // INDOCRYPT 2026
  
  var rawDeadlines = ["2026-08-15 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#indocrypt2026-theory-pract-cnf-coren-expcfp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#indocrypt2026-theory-pract-cnf-coren-expcfp-0').addClass('past');
      }
      $('#indocrypt2026-theory-pract-cnf-coren-expcfp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["indocrypt2026-theory-pract-cnf-coren-expcfp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // SCN 2026
  
  var rawDeadlines = ["2026-02-28 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#scn2026-pract-applied-cnf-coren-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#scn2026-pract-applied-cnf-coren-0').addClass('past');
      }
      $('#scn2026-pract-applied-cnf-coren-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["scn2026-pract-applied-cnf-coren-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM SoCC 2026
  
  var rawDeadlines = ["2026-02-13 23:59","2026-07-14 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-socc2026-pract-applied-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-socc2026-pract-applied-cnf-coreo-0').addClass('past');
      }
      $('#acm-socc2026-pract-applied-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-socc2026-pract-applied-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-socc2026-pract-applied-cnf-coreo-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-socc2026-pract-applied-cnf-coreo-1').addClass('past');
      }
      $('#acm-socc2026-pract-applied-cnf-coreo-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-socc2026-pract-applied-cnf-coreo-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // AfricaCrypt 2026
  
  var rawDeadlines = ["2026-03-01 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#africacrypt2026-theory-pract-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#africacrypt2026-theory-pract-cnf-coreo-0').addClass('past');
      }
      $('#africacrypt2026-theory-pract-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["africacrypt2026-theory-pract-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ArcticCrypt 2025
  
  var rawDeadlines = ["2024-09-13 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#arcticcrypt2025-theory-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#arcticcrypt2025-theory-cnf-coreo-0').addClass('past');
      }
      $('#arcticcrypt2025-theory-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["arcticcrypt2025-theory-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // FLTA 2026
  
  var rawDeadlines = ["2026-06-01 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#flta2026-pract-applied-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#flta2026-pract-applied-cnf-coreo-0').addClass('past');
      }
      $('#flta2026-pract-applied-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["flta2026-pract-applied-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ITC 2026
  
  var rawDeadlines = ["2026-03-16 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#itc2026-theory-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#itc2026-theory-cnf-coreo-0').addClass('past');
      }
      $('#itc2026-theory-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["itc2026-theory-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE CNS 2025
  
  var rawDeadlines = ["2025-05-05 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-cns2025-pract-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-cns2025-pract-cnf-coreo-0').addClass('past');
      }
      $('#ieee-cns2025-pract-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-cns2025-pract-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // LATINCRYPT 2025
  
  var rawDeadlines = ["2025-05-16 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#latincrypt2025-theory-pract-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#latincrypt2025-theory-pract-cnf-coreo-0').addClass('past');
      }
      $('#latincrypt2025-theory-pract-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["latincrypt2025-theory-pract-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM CCSW 2026
  
  var rawDeadlines = ["2026-07-08 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-ccsw2026-pract-wk-exp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-ccsw2026-pract-wk-exp-0').addClass('past');
      }
      $('#acm-ccsw2026-pract-wk-exp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-ccsw2026-pract-wk-exp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // AISec 2026
  
  var rawDeadlines = ["2026-07-24 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#aisec2026-pract-ppml-sok-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#aisec2026-pract-ppml-sok-wk-0').addClass('past');
      }
      $('#aisec2026-pract-ppml-sok-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["aisec2026-pract-ppml-sok-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // APKC 2026
  
  var rawDeadlines = ["2026-01-20 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#apkc2026-theory-pract-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#apkc2026-theory-pract-wk-0').addClass('past');
      }
      $('#apkc2026-theory-pract-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["apkc2026-theory-pract-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // CPSIoTSec 2026
  
  var rawDeadlines = ["2026-06-30 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#cpsiotsec2026-applied-sok-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#cpsiotsec2026-applied-sok-wk-0').addClass('past');
      }
      $('#cpsiotsec2026-applied-sok-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["cpsiotsec2026-applied-sok-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // CPSS 2026
  
  var rawDeadlines = ["2026-01-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#cpss2026-pract-applied-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#cpss2026-pract-applied-wk-0').addClass('past');
      }
      $('#cpss2026-pract-applied-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["cpss2026-pract-applied-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // FHE Conference 2026
  
  var rawDeadlines = ["2025-11-01 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#fhe-conference2026-theory-pract-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#fhe-conference2026-theory-pract-wk-0').addClass('past');
      }
      $('#fhe-conference2026-theory-pract-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["fhe-conference2026-theory-pract-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // FL-AsiaCCS 2026
  
  var rawDeadlines = ["2026-02-22 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#fl-asiaccs2026-applied-ppml-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#fl-asiaccs2026-applied-ppml-wk-0').addClass('past');
      }
      $('#fl-asiaccs2026-applied-ppml-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["fl-asiaccs2026-applied-ppml-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // LAMPS 2026
  
  var rawDeadlines = ["2026-07-11 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#lamps2026-applied-wk-exp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#lamps2026-applied-wk-exp-0').addClass('past');
      }
      $('#lamps2026-applied-wk-exp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["lamps2026-applied-wk-exp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // LM-SHIELD 2026
  
  var rawDeadlines = ["2026-03-20 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#lm-shield2026-pract-ppml-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#lm-shield2026-pract-ppml-wk-0').addClass('past');
      }
      $('#lm-shield2026-pract-ppml-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["lm-shield2026-pract-ppml-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // FL4Industry 2026
  
  var rawDeadlines = ["2026-08-02 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#fl4industry2026-applied-ppml-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#fl4industry2026-applied-ppml-wk-0').addClass('past');
      }
      $('#fl4industry2026-applied-ppml-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["fl4industry2026-applied-ppml-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // FLCA 2026
  
  var rawDeadlines = ["2025-10-24 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#flca2026-applied-ppml-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#flca2026-applied-ppml-wk-0').addClass('past');
      }
      $('#flca2026-applied-ppml-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["flca2026-applied-ppml-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // LightSec 2026
  
  var rawDeadlines = ["2026-06-19 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#lightsec2026-pract-applied-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#lightsec2026-pract-applied-wk-0').addClass('past');
      }
      $('#lightsec2026-pract-applied-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["lightsec2026-pract-applied-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // MPC Security in Practice 2026
  
  var rawDeadlines = ["2026-03-02 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#mpc-security-in-practice2026-pract-applied-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#mpc-security-in-practice2026-pract-applied-wk-0').addClass('past');
      }
      $('#mpc-security-in-practice2026-pract-applied-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["mpc-security-in-practice2026-pract-applied-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // PPML CRYPTO 2025
  
  var rawDeadlines = ["2025-06-15 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ppml-crypto2025-pract-ppml-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ppml-crypto2025-pract-ppml-wk-0').addClass('past');
      }
      $('#ppml-crypto2025-pract-ppml-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ppml-crypto2025-pract-ppml-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // RWC 2027
  
  var rawDeadlines = ["2026-11-16 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#rwc2027-pract-applied-wk-expcfp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#rwc2027-pract-applied-wk-expcfp-0').addClass('past');
      }
      $('#rwc2027-pract-applied-wk-expcfp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["rwc2027-pract-applied-wk-expcfp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // RWC 2028
  
  var rawDeadlines = ["2027-11-16 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2028;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#rwc2028-pract-applied-wk-expcfp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#rwc2028-pract-applied-wk-expcfp-0').addClass('past');
      }
      $('#rwc2028-pract-applied-wk-expcfp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["rwc2028-pract-applied-wk-expcfp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // RWMPC 2026
  
  var rawDeadlines = ["2026-01-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#rwmpc2026-pract-applied-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#rwmpc2026-pract-applied-wk-0').addClass('past');
      }
      $('#rwmpc2026-pract-applied-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["rwmpc2026-pract-applied-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // SAFE-AI 2026
  
  var rawDeadlines = ["2026-05-21 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#safe-ai2026-pract-hw-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#safe-ai2026-pract-hw-wk-0').addClass('past');
      }
      $('#safe-ai2026-pract-hw-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["safe-ai2026-pract-hw-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // SECAI 2025
  
  var rawDeadlines = ["2025-07-07 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#secai2025-pract-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#secai2025-pract-wk-0').addClass('past');
      }
      $('#secai2025-pract-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["secai2025-pract-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // SeQureDB 2026
  
  var rawDeadlines = ["2026-03-12 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#sequredb2026-pract-ppml-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#sequredb2026-pract-ppml-wk-0').addClass('past');
      }
      $('#sequredb2026-pract-ppml-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["sequredb2026-pract-ppml-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // SysteMPC 2026
  
  var rawDeadlines = ["2026-07-10 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#systempc2026-pract-hw-wk-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#systempc2026-pract-hw-wk-0').addClass('past');
      }
      $('#systempc2026-pract-hw-wk-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["systempc2026-pract-hw-wk-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // WAHC 2026
  
  var rawDeadlines = ["2026-06-27 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#wahc2026-applied-wk-exp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#wahc2026-applied-wk-exp-0').addClass('past');
      }
      $('#wahc2026-applied-wk-exp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["wahc2026-applied-wk-exp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // WPES 2026
  
  var rawDeadlines = ["2026-07-07 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#wpes2026-pract-wk-exp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#wpes2026-pract-wk-exp-0').addClass('past');
      }
      $('#wpes2026-pract-wk-exp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["wpes2026-pract-wk-exp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM ASIACCS 2026
  
  var rawDeadlines = ["2026-02-07 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-asiaccs2026-pract-ps-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-asiaccs2026-pract-ps-0').addClass('past');
      }
      $('#acm-asiaccs2026-pract-ps-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-asiaccs2026-pract-ps-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM CCS 2026
  
  var rawDeadlines = ["2026-07-23 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-ccs2026-pract-ps-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-ccs2026-pract-ps-0').addClass('past');
      }
      $('#acm-ccs2026-pract-ps-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-ccs2026-pract-ps-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACSAC 2026
  
  var rawDeadlines = ["2026-09-13 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acsac2026-pract-applied-ps-expcfp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acsac2026-pract-applied-ps-expcfp-0').addClass('past');
      }
      $('#acsac2026-pract-applied-ps-expcfp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acsac2026-pract-applied-ps-expcfp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // CHES 2025
  
  var rawDeadlines = ["2025-07-07 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ches2025-pract-applied-ps-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ches2025-pract-applied-ps-0').addClass('past');
      }
      $('#ches2025-pract-applied-ps-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ches2025-pract-applied-ps-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE Euro S&P 2025
  
  var rawDeadlines = ["2025-04-30 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-euro-s-p2025-pract-ps-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-euro-s-p2025-pract-ps-0').addClass('past');
      }
      $('#ieee-euro-s-p2025-pract-ps-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-euro-s-p2025-pract-ps-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE S&P 2027
  
  var rawDeadlines = ["2027-03-20 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-s-p2027-pract-ps-exp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-s-p2027-pract-ps-exp-0').addClass('past');
      }
      $('#ieee-s-p2027-pract-ps-exp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-s-p2027-pract-ps-exp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // NDSS 2026
  
  var rawDeadlines = ["2026-01-20 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ndss2026-pract-applied-ps-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ndss2026-pract-applied-ps-0').addClass('past');
      }
      $('#ndss2026-pract-applied-ps-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ndss2026-pract-applied-ps-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // PoPETS 2025
  
  var rawDeadlines = ["2025-06-01 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#popets2025-pract-applied-ps-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#popets2025-pract-applied-ps-0').addClass('past');
      }
      $('#popets2025-pract-applied-ps-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["popets2025-pract-applied-ps-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // Federated Machine Learning International Summer School 2026
  
  var rawDeadlines = ["2026-06-15 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#federated-machine-learning-international-summer-school2026-crs-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#federated-machine-learning-international-summer-school2026-crs-0').addClass('past');
      }
      $('#federated-machine-learning-international-summer-school2026-crs-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["federated-machine-learning-international-summer-school2026-crs-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IAS Winter School 2026
  
  var rawDeadlines = ["2026-01-19 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ias-winter-school2026-crs-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ias-winter-school2026-crs-0').addClass('past');
      }
      $('#ias-winter-school2026-crs-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ias-winter-school2026-crs-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // Real World AI Security 2026
  
  var rawDeadlines = ["2026-06-15 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#real-world-ai-security2026-crs-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#real-world-ai-security2026-crs-0').addClass('past');
      }
      $('#real-world-ai-security2026-crs-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["real-world-ai-security2026-crs-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // TPDP 2026
  
  var rawDeadlines = ["2026-02-18 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#tpdp2026-crs-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#tpdp2026-crs-0').addClass('past');
      }
      $('#tpdp2026-crs-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["tpdp2026-crs-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // TPMPC 2026
  
  var rawDeadlines = ["2026-03-02 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#tpmpc2026-crs-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#tpmpc2026-crs-0').addClass('past');
      }
      $('#tpmpc2026-crs-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["tpmpc2026-crs-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // AAAI 2027
  
  var rawDeadlines = ["2026-07-28 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#aaai2027-pract-cnf-ppml-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#aaai2027-pract-cnf-ppml-coreas-0').addClass('past');
      }
      $('#aaai2027-pract-cnf-ppml-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["aaai2027-pract-cnf-ppml-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACML 2026
  
  var rawDeadlines = ["2026-06-06 23:59","2026-06-26 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acml2026-pract-cnf-ppml-corec-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acml2026-pract-cnf-ppml-corec-0').addClass('past');
      }
      $('#acml2026-pract-cnf-ppml-corec-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acml2026-pract-cnf-ppml-corec-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acml2026-pract-cnf-ppml-corec-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acml2026-pract-cnf-ppml-corec-1').addClass('past');
      }
      $('#acml2026-pract-cnf-ppml-corec-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acml2026-pract-cnf-ppml-corec-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ECMLPKDD 2026
  
  var rawDeadlines = ["2026-03-12 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ecmlpkdd2026-pract-cnf-ppml-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ecmlpkdd2026-pract-cnf-ppml-corea-0').addClass('past');
      }
      $('#ecmlpkdd2026-pract-cnf-ppml-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ecmlpkdd2026-pract-cnf-ppml-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ECMLPKDD (Industrial) 2026
  
  var rawDeadlines = ["2026-04-26 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ecmlpkdd-industrial-2026-pract-cnf-ppml-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ecmlpkdd-industrial-2026-pract-cnf-ppml-corea-0').addClass('past');
      }
      $('#ecmlpkdd-industrial-2026-pract-cnf-ppml-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ecmlpkdd-industrial-2026-pract-cnf-ppml-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ICLR 2026
  
  var rawDeadlines = ["2025-09-24 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#iclr2026-pract-cnf-ppml-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#iclr2026-pract-cnf-ppml-coreas-0').addClass('past');
      }
      $('#iclr2026-pract-cnf-ppml-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["iclr2026-pract-cnf-ppml-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ICML 2026
  
  var rawDeadlines = ["2026-01-28 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#icml2026-pract-pos-cnf-ppml-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#icml2026-pract-pos-cnf-ppml-coreas-0').addClass('past');
      }
      $('#icml2026-pract-pos-cnf-ppml-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["icml2026-pract-pos-cnf-ppml-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IJCAI-ECAI 2026
  
  var rawDeadlines = ["2026-01-19 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ijcai-ecai2026-pract-cnf-ppml-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ijcai-ecai2026-pract-cnf-ppml-coreas-0').addClass('past');
      }
      $('#ijcai-ecai2026-pract-cnf-ppml-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ijcai-ecai2026-pract-cnf-ppml-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE SaTML 2026
  
  var rawDeadlines = ["2025-09-24 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-satml2026-pract-cnf-ppml-sok-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-satml2026-pract-cnf-ppml-sok-coreo-0').addClass('past');
      }
      $('#ieee-satml2026-pract-cnf-ppml-sok-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-satml2026-pract-cnf-ppml-sok-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // KDD 2026
  
  var rawDeadlines = ["2025-07-24 23:59","2026-01-28 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#kdd2026-pract-cnf-ppml-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#kdd2026-pract-cnf-ppml-coreas-0').addClass('past');
      }
      $('#kdd2026-pract-cnf-ppml-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["kdd2026-pract-cnf-ppml-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#kdd2026-pract-cnf-ppml-coreas-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#kdd2026-pract-cnf-ppml-coreas-1').addClass('past');
      }
      $('#kdd2026-pract-cnf-ppml-coreas-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["kdd2026-pract-cnf-ppml-coreas-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // NeurIPS 2026
  
  var rawDeadlines = ["2026-05-06 07:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#neurips2026-pract-pos-cnf-ppml-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#neurips2026-pract-pos-cnf-ppml-coreas-0').addClass('past');
      }
      $('#neurips2026-pract-pos-cnf-ppml-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["neurips2026-pract-pos-cnf-ppml-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // MLSys 2026
  
  var rawDeadlines = ["2025-10-30 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#mlsys2026-pract-cnf-ppml-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#mlsys2026-pract-cnf-ppml-coreo-0').addClass('past');
      }
      $('#mlsys2026-pract-cnf-ppml-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["mlsys2026-pract-cnf-ppml-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // PAKDD 2026
  
  var rawDeadlines = ["2025-11-15 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#pakdd2026-pract-cnf-ppml-coreb-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#pakdd2026-pract-cnf-ppml-coreb-0').addClass('past');
      }
      $('#pakdd2026-pract-cnf-ppml-coreb-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["pakdd2026-pract-cnf-ppml-coreb-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // AsianHOST 2025
  
  var rawDeadlines = ["2025-07-28 14:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#asianhost2025-hw-applied-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#asianhost2025-hw-applied-cnf-coreo-0').addClass('past');
      }
      $('#asianhost2025-hw-applied-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["asianhost2025-hw-applied-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // DAC 2026
  
  var rawDeadlines = ["2025-11-18 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#dac2026-hw-applied-cnf-coreas-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#dac2026-hw-applied-cnf-coreas-0').addClass('past');
      }
      $('#dac2026-hw-applied-cnf-coreas-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["dac2026-hw-applied-cnf-coreas-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE HOST 2026
  
  var rawDeadlines = ["2025-08-26 23:59","2025-12-08 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-host2026-hw-applied-cnf-coreo-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-host2026-hw-applied-cnf-coreo-0').addClass('past');
      }
      $('#ieee-host2026-hw-applied-cnf-coreo-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-host2026-hw-applied-cnf-coreo-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-host2026-hw-applied-cnf-coreo-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-host2026-hw-applied-cnf-coreo-1').addClass('past');
      }
      $('#ieee-host2026-hw-applied-cnf-coreo-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-host2026-hw-applied-cnf-coreo-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ISCA 2027
  
  var rawDeadlines = ["2026-11-17 23:59","2026-12-12 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2027;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#isca2027-hw-applied-cnf-coreas-exp-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#isca2027-hw-applied-cnf-coreas-exp-0').addClass('past');
      }
      $('#isca2027-hw-applied-cnf-coreas-exp-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["isca2027-hw-applied-cnf-coreas-exp-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#isca2027-hw-applied-cnf-coreas-exp-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#isca2027-hw-applied-cnf-coreas-exp-1').addClass('past');
      }
      $('#isca2027-hw-applied-cnf-coreas-exp-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["isca2027-hw-applied-cnf-coreas-exp-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // CNIL-Inria Privacy Award 2026
  
  var rawDeadlines = ["2026-02-27 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#cnil-inria-privacy-award2026-misc-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#cnil-inria-privacy-award2026-misc-0').addClass('past');
      }
      $('#cnil-inria-privacy-award2026-misc-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["cnil-inria-privacy-award2026-misc-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // CNIL-Inria Privacy Research Day 2026
  
  var rawDeadlines = ["2026-03-22 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#cnil-inria-privacy-research-day2026-misc-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#cnil-inria-privacy-research-day2026-misc-0').addClass('past');
      }
      $('#cnil-inria-privacy-research-day2026-misc-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["cnil-inria-privacy-research-day2026-misc-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // Cybersecurity Artifacts Competition and Impact Award 2025
  
  var rawDeadlines = ["2025-09-17 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#cybersecurity-artifacts-competition-and-impact-award2025-misc-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#cybersecurity-artifacts-competition-and-impact-award2025-misc-0').addClass('past');
      }
      $('#cybersecurity-artifacts-competition-and-impact-award2025-misc-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["cybersecurity-artifacts-competition-and-impact-award2025-misc-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // Doctoral Symposium at ACM CCS 2026
  
  var rawDeadlines = ["2026-07-30 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#doctoral-symposium-at-acm-ccs2026-applied-misc-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#doctoral-symposium-at-acm-ccs2026-applied-misc-0').addClass('past');
      }
      $('#doctoral-symposium-at-acm-ccs2026-applied-misc-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["doctoral-symposium-at-acm-ccs2026-applied-misc-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // Enigma@USENIX Security 2026
  
  var rawDeadlines = ["2026-03-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#enigma-usenix-security2026-pract-applied-misc-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#enigma-usenix-security2026-pract-applied-misc-0').addClass('past');
      }
      $('#enigma-usenix-security2026-pract-applied-misc-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["enigma-usenix-security2026-pract-applied-misc-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE Cybersecurity Award for Practice 2026
  
  var rawDeadlines = ["2026-02-24 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-cybersecurity-award-for-practice2026-misc-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-cybersecurity-award-for-practice2026-misc-0').addClass('past');
      }
      $('#ieee-cybersecurity-award-for-practice2026-misc-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-cybersecurity-award-for-practice2026-misc-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE S&P Short Talk 2025
  
  var rawDeadlines = ["2025-05-12 16:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2025;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "PDT");
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-s-p-short-talk2025-pract-applied-misc-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-s-p-short-talk2025-pract-applied-misc-0').addClass('past');
      }
      $('#ieee-s-p-short-talk2025-pract-applied-misc-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-s-p-short-talk2025-pract-applied-misc-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // PhD Symposium at The Web Conference 2026
  
  var rawDeadlines = ["2026-01-05 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#phd-symposium-at-the-web-conference2026-applied-misc-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#phd-symposium-at-the-web-conference2026-applied-misc-0').addClass('past');
      }
      $('#phd-symposium-at-the-web-conference2026-applied-misc-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["phd-symposium-at-the-web-conference2026-applied-misc-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // PET-CON 2026.1 2026
  
  var rawDeadlines = ["2026-04-09 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#pet-con-2026-12026-applied-misc-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#pet-con-2026-12026-applied-misc-0').addClass('past');
      }
      $('#pet-con-2026-12026-applied-misc-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["pet-con-2026-12026-applied-misc-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // ACM TOPS 2026
  
  var rawDeadlines = ["%y-12-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#acm-tops2026-pract-applied-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#acm-tops2026-pract-applied-jrn-0').addClass('past');
      }
      $('#acm-tops2026-pract-applied-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["acm-tops2026-pract-applied-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IACR CiC 2026
  
  var rawDeadlines = ["2026-02-02 23:59","2026-04-27 23:59","2026-07-27 23:59","2026-10-26 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#iacr-cic2026-theory-pract-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#iacr-cic2026-theory-pract-jrn-0').addClass('past');
      }
      $('#iacr-cic2026-theory-pract-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["iacr-cic2026-theory-pract-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 1;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#iacr-cic2026-theory-pract-jrn-1 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#iacr-cic2026-theory-pract-jrn-1').addClass('past');
      }
      $('#iacr-cic2026-theory-pract-jrn-1 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["iacr-cic2026-theory-pract-jrn-1"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 2;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#iacr-cic2026-theory-pract-jrn-2 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#iacr-cic2026-theory-pract-jrn-2').addClass('past');
      }
      $('#iacr-cic2026-theory-pract-jrn-2 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["iacr-cic2026-theory-pract-jrn-2"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  //
  
  
  var deadlineId = 3;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#iacr-cic2026-theory-pract-jrn-3 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#iacr-cic2026-theory-pract-jrn-3').addClass('past');
      }
      $('#iacr-cic2026-theory-pract-jrn-3 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["iacr-cic2026-theory-pract-jrn-3"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IACR JoC 2026
  
  var rawDeadlines = ["%y-12-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#iacr-joc2026-theory-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#iacr-joc2026-theory-jrn-0').addClass('past');
      }
      $('#iacr-joc2026-theory-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["iacr-joc2026-theory-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE TC 2026
  
  var rawDeadlines = ["%y-12-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-tc2026-pract-applied-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-tc2026-pract-applied-jrn-0').addClass('past');
      }
      $('#ieee-tc2026-pract-applied-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-tc2026-pract-applied-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE TDSC 2026
  
  var rawDeadlines = ["%y-12-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-tdsc2026-pract-applied-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-tdsc2026-pract-applied-jrn-0').addClass('past');
      }
      $('#ieee-tdsc2026-pract-applied-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-tdsc2026-pract-applied-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE TIFS 2026
  
  var rawDeadlines = ["%y-12-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-tifs2026-pract-applied-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-tifs2026-pract-applied-jrn-0').addClass('past');
      }
      $('#ieee-tifs2026-pract-applied-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-tifs2026-pract-applied-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE TPDS 2026
  
  var rawDeadlines = ["%y-12-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-tpds2026-pract-applied-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-tpds2026-pract-applied-jrn-0').addClass('past');
      }
      $('#ieee-tpds2026-pract-applied-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-tpds2026-pract-applied-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // IEEE ToSC 2026
  
  var rawDeadlines = ["%y-12-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#ieee-tosc2026-pract-applied-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#ieee-tosc2026-pract-applied-jrn-0').addClass('past');
      }
      $('#ieee-tosc2026-pract-applied-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["ieee-tosc2026-pract-applied-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // JACM 2026
  
  var rawDeadlines = ["%y-12-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#jacm2026-theory-pract-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#jacm2026-theory-pract-jrn-0').addClass('past');
      }
      $('#jacm2026-theory-pract-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["jacm2026-theory-pract-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // JCSS 2026
  
  var rawDeadlines = ["%y-12-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#jcss2026-theory-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#jcss2026-theory-jrn-0').addClass('past');
      }
      $('#jcss2026-theory-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["jcss2026-theory-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // JPDC 2026
  
  var rawDeadlines = ["%y-12-31 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#jpdc2026-theory-pract-jrn-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#jpdc2026-theory-pract-jrn-0').addClass('past');
      }
      $('#jpdc2026-theory-pract-jrn-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["jpdc2026-theory-pract-jrn-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  
  // Indocrypt 2026
  
  var rawDeadlines = ["2026-08-15 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // deal with year template in deadline
    year = 2026;
    rawDeadline = rawDeadline.replace('%y', year).replace('%Y', year - 1);
    // adjust date according to deadline timezone
    
    var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
    

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

  
  
  //
  
  
  var deadlineId = 0;
  if (deadlineId < parsedDeadlines.length) {
    var confDeadline = parsedDeadlines[deadlineId];

    // render countdown timer
    if (confDeadline) {
      function make_update_countdown_fn(confDeadline) {
        return function(event) {
          diff = moment() - confDeadline;
          if (diff <= 0) {
            $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
            var daysLeft = -diff / 86400000;
            var urgency = daysLeft < 7 ? 'urgent' : daysLeft < 30 ? 'warning' : 'ok';
            $(this).removeClass('urgent warning ok').addClass(urgency);
            $(this).closest('.conf')
              .removeClass('urgency-urgent urgency-warning urgency-ok')
              .addClass('urgency-' + urgency);
          } else {
            $(this).html(confDeadline.fromNow());
          }
        }
      }
      $('#indocrypt2026-theory-pract-applied-cnf-corea-0 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
      // check if date has passed, add 'past' class to it
      if (moment() - confDeadline > 0) {
        $('#indocrypt2026-theory-pract-applied-cnf-corea-0').addClass('past');
      }
      $('#indocrypt2026-theory-pract-applied-cnf-corea-0 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
      deadlineByConf["indocrypt2026-theory-pract-applied-cnf-corea-0"] = confDeadline;
    }
  } else {
    // TODO: hide the conf_id ?
  }
  
  
  

  // Reorder list
  var today = moment();

  function getEventStartDate(confEl) {
    var dateStr = $(confEl).data('conf-date');
    var year = $(confEl).data('conf-year');
    if (!dateStr || String(dateStr).toLowerCase().indexOf('tba') === 0) return null;
    // Handle "June 29 - July 03" → "June 29"; handle "November 15-19" → "November 15"
    var firstPart = String(dateStr).split(' - ')[0].replace(/-\d+$/, '').trim();
    var parsed = moment(firstPart + ' ' + year, 'MMMM D YYYY');
    return parsed.isValid() ? parsed : null;
  }

  function renderConfs(sortMode) {
    var confs = $('.conf-container .conf, #past-events-list .conf').detach();

    if (sortMode === 'event-date') {
      confs.sort(function(a, b) {
        var aDate = getEventStartDate(a);
        var bDate = getEventStartDate(b);
        if (!aDate && !bDate) return 0;
        if (!aDate) return 1;
        if (!bDate) return -1;
        return aDate.diff(bDate);
      });
    } else {
      confs.sort(function(a, b) {
        var aDeadline = deadlineByConf[a.id];
        var bDeadline = deadlineByConf[b.id];
        var aDiff = today.diff(aDeadline);
        var bDiff = today.diff(bDeadline);
        if (aDiff < 0 && bDiff > 0) return -1;
        if (aDiff > 0 && bDiff < 0) return 1;
        return bDiff - aDiff;
      });
    }

    var pastConfs = [];
    var upcomingConfs = [];
    confs.each(function() {
      ($(this).hasClass('past') ? pastConfs : upcomingConfs).push(this);
    });

    $('.conf-container').append(upcomingConfs);
    $('#past-events-list').append(pastConfs);
  }

  renderConfs('deadline');

  $('.sort-btn').click(function() {
    $('.sort-btn').removeClass('active-sort');
    $(this).addClass('active-sort');
    renderConfs($(this).data('sort'));
  });

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
  var filter1 = [{"name":"Theory","tag":"THEORY"},{"name":"Practical","tag":"PRACT"},{"name":"Applied","tag":"APPLIED"},{"name":"Machine Learning","tag":"PPML"},{"name":"Hardware","tag":"HW"},{"name":"SoKs","tag":"SOK"},{"name":"Position","tag":"POS"}];
  var filter2 = [{"name":"Conferences","tag":"CNF"},{"name":"Journals","tag":"JRN"},{"name":"Workshops","tag":"WK"},{"name":"Posters","tag":"PS"},{"name":"Crypto Schools","tag":"CRS"},{"name":"Miscellaneous","tag":"MISC"}];
  var filter3 = [{"name":"A*","tag":"COREAS"},{"name":"A","tag":"COREA"},{"name":"B","tag":"COREB"},{"name":"C","tag":"COREC"},{"name":"National","tag":"COREN"},{"name":"Unranked","tag":"COREU"},{"name":"Not classified","tag":"COREO"}];

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
  var tags = store.get('mpc-deadlines.github.io');
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
  store.set('mpc-deadlines.github.io', tags);

   
   
  // Track selected filters
  let selectedFilters = {
    filter1: new Set(),
    filter2: new Set(),
    filter3: new Set()
  };

  var searchQuery = '';

  function updateConfList() {
    $(".conf").each(function () {
      let conf = $(this);
      let show = true;

      // Check search query against name, description, date, and place
      if (searchQuery) {
        let text = (
          conf.find('.conf-title').text() + ' ' +
          conf.find('.meta').first().text() + ' ' +
          conf.find('.conf-date').text() + ' ' +
          conf.find('.conf-place').text()
        ).toLowerCase();
        if (text.indexOf(searchQuery) === -1) {
          show = false;
        }
      }

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
    $(".filter-checkbox").prop("checked", false);
    selectedFilters = {
      filter1: new Set(),
      filter2: new Set(),
      filter3: new Set()
    };
    searchQuery = '';
    $('#search-input').val('');
    updateConfList();
  });

  // Search input handler
  $('#search-input').on('input', function () {
    searchQuery = $(this).val().toLowerCase().trim();
    updateConfList();
  });

  // Clear search button
  $('#clear-search').click(function () {
    searchQuery = '';
    $('#search-input').val('').focus();
    updateConfList();
  });

  updateConfList(); // Initial display
});
