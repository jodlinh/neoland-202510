# Git - The Stupid Content Tracker

![Git image](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png)

Commands in terminal

## git init

Initializes a local folder as a repository

```sh
$git init  .....
```

## git remote add origin >url<

Connect the local repository to origin in GitHub

```sh
$git remote add  origin https://github.com/jodlinh/neoland-202510
```

## git pull

Pulls all the changes from remote (origin) repository

```sh
$ git pull
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (4/4), 1.84 KiB | 69.00 KiB/s, done.
From https://github.com/jodlinh/neoland-202510
 * [new branch]      main       -> origin/main
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=<remote>/<branch> main
```

## git  brach

show all the branches in the repository

```sh
$git branch -a
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
```

## git switch >branch-name<

change branch to the given one

```sh
$ git switch main
branch 'main' set up to track 'origin/main'.
Already on 'main'
```

## git status

shows the status of  files in local repo.

```sh
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/

nothing added to commit but untracked files present (use "git add" to track)
```

## git add  

adds content to staging.

```sh
git add staff/
```

## git config

configure settings in local git

```sh
$git config  user.mail "jodlinh@gmail.com"
$git config user.name "jodlin"
```

## git  commit -m

create a commit with menssage

```sh
$ git commit -m "add bash and git docs"
[main f579f45] add bash and git docs
 2 files changed, 176 insertions(+)
 create mode 100644 staff/jodlin-huerta/playground/bash/README.md
 create mode 100644 staff/jodlin-huerta/playground/git/README.MD
```

## git push

push the change from local machine to remote repository

```sh
$ git push 
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Delta compression using up to 8 threads
Compressing objects: 100% (9/9), done.
Writing objects: 100% (16/16), 2.52 KiB | 861.00 KiB/s, done.
Total 16 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/jodlinh/neoland-202510
   c0018b0..885b546  main -> main
```

## git log

Show commits history ordered descending by time

```sh
$ git log
commit 352881bfe6f52b51bdc4cde3980e1c84f65d04ef (HEAD -> main, origin/main, origin/HEAD)
Author: jodlin <jodlinh@gmail.com>
Date:   Thu Oct 23 22:04:57 2025 +0200

    add push and commit comands to doc

commit 885b546990db4023fd3327dc692665aa84e0bae9
Author: jodlin <jodlinh@gmail.com>
Date:   Thu Oct 23 21:57:43 2025 +0200

    add bash and git docs
```

