# 🚀 MPC Deadlines Hub

Welcome to the **MPC Deadlines Hub**, your one-stop destination for keeping track of the latest deadlines for top Multi-Party Computation (MPC) conferences, journals, and workshops! 📅✨

## 🤔 What is MPC?

Secure Multi-party Computation (MPC) allows a set of mutually distrusting parties to perform a joint computation over their private inputs while preserving the privacy of their individual inputs. Curious to learn more? Check out this **[MPC overview](https://eprint.iacr.org/2020/300)**! 🔍🔐

## 🚀 Adding/updating a conference

Want to contribute? Awesome! Here’s how:

* Read the data format description below. **Note that the timezone format sign is inverted** (e.g., UTC+7 is written as `Etc/GMT-7`). It's [not a bug][0]. Yeah, we know—it’s weird. If you have a better JavaScript timezone library in mind, hit us up! 😅
* Update `_data/conferences.yml`. You can do this directly on GitHub or locally after forking the repo.
* Send a pull request. 🎉

💡 **Too lazy to create a pull request?** No worries! Drop a message on our **[Telegram Group](https://t.me/+sm414tMmhGhhNTA0)** 📢, and we’ll update the entries for you! 😎🚀

### ✅ Is my entry in scope?

This page is meant to host academic conferences, journals, workshops, and related event deadlines.

Ask yourself these questions before adding an entry:

- 📝 Is there a "Call For Papers"? A submission link? Formatting guidelines (page limits, style guides, etc.)?
- 🔐 Does it mention 'secure multi-party computation', 'MPC', or 'privacy-preserving computing' in its topics?
- 🧐 Is there a peer-review process? Are there named general/program chairs or a program committee?

If you answered **YES** to all of the above, congratulations! Your conference/workshop is a great fit! 🎯

### 🏆 Conference entry record

Example record:

```
- name: ACM CCS
  description: ACM Conference on Computer and Communications Security
  year: 2025
  link: https://www.sigsac.org/ccs/CCS2025/
  abdeadline: Jan 02, Apr 07
  deadline:
    - "2025-01-09 23:59"
    - "2025-04-14 23:59"
  rebut: March 06-19, June 09-22
  date: October 13-17
  place: Taipei, Taiwan
  comment: 2 deadlines. Notifications - March 27, June 30.
  tags: [PRACT, APPLIED, CNF, COREAS] 
```

📌 **Notes:**

- For an event with a **single deadline**, make sure to put the deadline in square brackets, like this:
  ```
  deadline: ["2025-04-01 23:59"]
  ```
- Not all fields are mandatory! Just add the relevant ones. 😊

- The events are listed in alphabetical order grouped by the categories. Please make sure to have consistency while updating the entries.


### 🔍 Field descriptions

| Field name    | Description                                                 |
|--------------|-------------------------------------------------------------|
| `name`*      | Short conference name (no year)                              |
| `description` | Long name or a brief description                           |
| `year`*      | Year the conference is happening                            |
| `link`*      | URL to the conference homepage                              |
| `abdeadline`  | Registration and/or abstract deadline.                     |
| `deadline`*  | Submission deadline(s)                                      |
| `rebut`      | Rebuttal window                                            |
| `timezone`    | Timezone in [tz][1] format (Default: UTC-12, [AoE][2])     |
| `date`        | When the conference is happening                           |
| `place`       | Conference location                                        |
| `tags`        | One or more tags as detailed below.                        |

📌 **Please try to maintain consistency in the order of the fields when updating an entry.**

### 📌 Special Case of Workshops

Workshops can be a bit special! Here’s what to keep in mind when adding them:

- If the workshop is **affiliated with a conference**, make sure to add the `conference` tag, specifying the name of the main conference. For example:
   ```
   conference: CCS.
   ```
  This helps keep things clear and organized! 🔍


### 🏷️ Tags - Shortlisting Made Easy! 🚀

We use three sets of tags that act as filters to help you quickly find relevant entries. 

- **First filter**: Research Domain (e.g., THEORY, PRACT, APPLIED, etc.)
- **Second filter**: Publication Type (e.g., CNF, JRN, WK, PS, etc.)
- **Third filter**: [CORE](https://portal.core.edu.au/conf-ranks/) Ranking (e.g., COREAS, COREA, COREB, etc.)

For the full list of tags, check out [`/_data/filters.yml`](https://github.com/mpc-deadlines/mpc-deadlines.github.io/blob/main/_data/filters.yml). 🏷️

### 🔥 Special Case: `EXP` Tag

For an event that has been **announced** but the Call for Papers is **not yet available**, you can still add an entry! Just make sure to:
- Include the `EXP` tag.
- Fill in details based on the **previous year’s** event.
- This will internally set some of the fields to default placeholder values (e.g., `comment: "CFP yet to be announced"`).

🔥 **Let's make MPC deadlines easy to track—together!** 🚀


## 🙏 Acknowledgements

Thanks to the amazing **[sec-deadlines](https://sec-deadlines.github.io)** page, which inspired the initial version of this hub. 🙌