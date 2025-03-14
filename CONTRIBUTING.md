# Contributing

## Branch Naming 

- Use short, clear and descriptive names: When naming branches, aim for clarity by providing immediate context about their purpose. For example, use names like `feature/login` or `fix/navbar-overflow`.

- Use hyphens to separate wordes: Adopt hyphens to separate words in branch names for improved readability. For instance, `fix/login-issue` is easier to understand than `fix/LoginIssue` or `fix/login_issue`. Avoid unecessary hyphens (a name like feat/new — login- is not advisable).

- Use only lowercase alphanumeric characters (a-z, 0–9) along with hyphens. 

- Use Prefixes for organization:
  - Documentation related:
    - `doc/`: For updating, modifying, or correcting documentation.

  - Code related:
    - `feature/` or `feat/`: For creating new features.
	- `fix/`: For addressing code bugs.

- Add ticket numbers: If your project uses an issue tracking system like Jira or GitHub issues, incorporate the issue token into the branch name for easier tracking. 

Example: `feature/PROJ-123-footer-links`

## Commits messages 

### Use Gitmoji to create your commit messages

We recommend using Gitmoji to write commit messages. Visit the Gitmoji website [for installation information](https://gitmoji.dev/).

You will find all the emojis on the Gitmoji web site, but most commonly used emoji on the Developer Portal repository are:

- :tada: to begin a project
- :construction: work in progress
- Documentation related
	- :memo: To add or update documentation
	- :pencil2: To fix a typo
- Code related
	- :sparkles: to implement a new feature
	- :bug: to fix a bug
	- :recycle: refactor code
	- :wastebasket: deprecated code needed to be removed
- Maintenance related
	- :mag: improve SEO

### Commit messages formating 

The commit message is composed of:
- the `doc`, `feature`, or `fix prefix` between parenthesis
- the related ticket number or NO-ISSUE between brackets
- a short description

### Example

With Gitmoji and the naming convention, the commit looks like this:
`📝(doc) [NO-ISSUE]: DMK video presentation`

