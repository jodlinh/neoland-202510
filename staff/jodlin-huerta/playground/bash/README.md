# BASH

![BASH image](https://rsg-ecuador.github.io/unix.bioinfo.rsgecuador/_images/bash.png)

Comands in BASH terminal

## pwd

Patch to working directory

```sh
$ pwd
/Users/jodli/workspace
```

## ls

List files and folders (directories).

```sh
$ ls
'All Users'@   Default/  'Default User'@   Public/   desktop.ini   jodli/
```

## ls -l

list files and folders width details.

```sh
$ ls -l
total 25
lrwxrwxrwx 1 jrh 197121  14 Apr  1  2024 'All Users' -> /c/ProgramData/
drwxr-xr-x 1 jrh 197121   0 Apr 16  2025  Default/
lrwxrwxrwx 1 jrh 197121  16 Apr  1  2024 'Default User' -> /c/Users/Default/
drwxr-xr-x 1 jrh 197121   0 Apr 15  2025  Public/
-rw-r--r-- 1 jrh 197121 174 Apr  1  2024  desktop.ini
drwxr-xr-x 1 jrh 197121   0 Oct 22 21:25  jodli/
```

## mkdir folder-name

Create a folder width the provided name.

```sh
$mkdir workspace
```

## touch file-name

Creates  and empty file witdh the given name

```sh
# touch readme.txt
```

## chmod chmod rwx file/folder-name

Updates permisssions in given file or folder

```sh
$chmod 700 readme.txt
```

## nano

Opens a given file in the nano editor

```sh
$nano readme.txt
```

## rm file-name

Remove a  given file from system

## ls -a

Show visible and hidder files and folders in give patch
