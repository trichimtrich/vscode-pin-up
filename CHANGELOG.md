# Change Log

All notable changes to the "vscode-pin-up" extension will be documented in this file.

## [1.4.2] - 2023-12-12

- Added: manual refresh button (merged from https://github.com/ClementTurmel/vscode-pin-up/tree/feature/add-refresh-option)
- Added: auto refresh treeview on files added/removed

## [1.4.1] - 2021-02-24

- Fixed: Cancel button on remove pin icon removes the pin. (#18)

## [1.4.0] - 2020-10-09

- Added: Collapse all button.
- Added: Pin up current actived file (defualt keybord shortcut: `ctrl/cmd + alt + p`). #13
- Added: New array setting of `pin-up.list.ignore` to hide some files or folders on the pinned list by RegExp. #10

## [1.3.3] - 2020-09-17

- Changed: The ordering behavior inside the pinned folders will be same as VSCode explorer view. (Fixed Issue #9)

## [1.3.2] - 2020-09-13

- Added: An new configuration `pin-up.confirm.removePin(boolean)` that indicate if display a confirm modal before remove or clear the pins.

## [1.3.1] - 2020-09-02

- Fixed: Now, it will only display the alias while there have duplicated file name in the pinned list on Windows.

## [1.3.0] - 2020-09-01

- Added: Set alias for pinned files to distinguish the same name to each other. (Resolve Feature Request of #7)
- Fixed: The icon button of `pin outside` can be displayed on the right position now.

## [1.2.0] - 2020-06-05

- Added: Create file/folder and delete it in Pinned List.
- Fixed: Add category property to each commands.

## [1.1.1] - 2020-05-29

- Added: I18N Support of Chinese.
- Fixed: Skip the coming process if not selected any files on pin up outside files.

## [1.1.0] - 2020-05-29

- Added: Support to add files from outside of the workspace. (Feature Request #4)
- Changed: Redesigned the logo.

## [1.0.3] - 2020-05-21

- Fixed: Issue #3 - selected file opens only when bar loses focus
- Changed: Redesigned the icon so that it will be in accordance with VSCode's standard, it's looks should be more clearly than before.

## [1.0.2] - 2020-05-06

- Fixed: Can't open pinned file on windows

## [1.0.1] - 2020-04-28

- Fixed: Can't pin up file on windows

## [1.0.0] - 2020-04-18

- Initial release