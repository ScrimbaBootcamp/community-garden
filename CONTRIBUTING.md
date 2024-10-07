# Contributing to This Project
To contribute to an open source project, you will follow the git workflow. You will fork the main repository, clone it to your machine, make changes (in a branch), and follow steps to submit a pull request - so your changes can be merged with the main repo.

## General Guidelines
1. Look through our [Issues](https://github.com/ScrimbaBootcamp/community-garden/issues), and see if there is one you would like to take on. If there isn't an issue for a change you would like to make, please create a new Issue.
2. Ask to be assigned to an issue, and tag the maintainer(s). Pull requests without a corresponding issue may or may not be accepted.
3. Please work on one issue at a time in order to avoid miscommunication. If you find there is something else you would like to change while working on your issue, please follow the previous two steps to create a new Issue and - if you would like to work on it - ask to be assigned.
4. Once you have been assigned to an issue, you can follow the protocol below.

## Get started
1. Go to [the main repository](https://github.com/ScrimbaBootcamp/community-garden).
2. Fork the project.
3. Under 'Owner', you should see your own GitHub account, followed by 'community-garden'. You can leave that as it is, or give it a different name.
4. Look at the other options on the form. If you would like, you can add a description. You shouldn't need to change the branch that is being copied, because it will be set to fork the `main` branch.
5. Click 'Create Fork'

You will be redirected to your fork of the repository. In the top left corner of the page you'll see '[Your-Username]/community-garden' to the right of the Octocat logo. 

6. Look for the '<> Code' button above the list of files, and click on it. 
7. Copy the URL for (your) repository.

## Continue in the terminal
1. Open a terminal.
2. Change the current working directory to the location where you want the cloned directory.\
For example: `cd Users/User/Desktop`
3. Type `git clone` and paste the URL that you just copied. Hit enter. Your local clone (copy of the files on GitHub) will be created.

### Configure git to sync changes with main repo
When you fork a project, you can configure git to pull down changes from the upstream repository into the local clone of your fork in addition to submitting requests to merge changes you've made.

1. In GitHub, go back to the project's [main repository](https://github.com/ScrimbaBootcamp/community-garden).
2. Click on the '<> Code' button in _that repo_, and copy the URL.
3. Back in the terminal, type `git remote add upstream [URL]`, (paste the URL you just copied where it says '[URL]' and hit Enter.
4. To verify your remote repositories, type `git remote -v` and hit Enter. You should see something like this:
    ```
        $ git remote -v

        > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
        > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
        > upstream  https://github.com/ScrimbaBootcamp/project-tracker.git (fetch)
        > upstream  https://github.com/ScrimbaBootcamp/project-tracker.git (push)
    ```

You will now be able to keep your fork synced with the upstream repository using git.

## Create a feature branch

When you are working on a particular feature (or fixing a bug, or testing out how some code will work), it is a great practice to create a named feature branch. This allows you to isolate your changes from the main codebase and hopefully prevent conflicts and errors.
If you are using the terminal, you can use these two commands:
```
git branch [name-of-your-feature-branch]
git checkout [name-of-your-feature-branch]
```
First you are creating the branch, and then you are switching to that branch to make your changes. 
You can accomplish the same thing in one line though, like this:\
`git checkout -b [name-of-your-feature-branch]`\
> [!Note]
> You can also use the `git switch -c` command, but this may not be compatible with older versions of git.

You will then create changes to stage, commit, push, and have merged. Once your branch has been merged with the main repository, you can delete your feature branch from the terminal, with one line:\
`git branch -d [name-of-your-feature-branch]`

### Keep your branch up to date
Because we have multiple contributors who may be working on changes simultaneously, it is possible that we will encounter merge conflicts. This happens when changes have been made on the same line(s) in the same file(s) from two or more branches. It isn't always possible to avoid this, however, you can reduce the chances of this by syncing your branch with the upstream repository _before_ pushing your own changes upstream. To do this, first pull the changes to your branch.  In the terminal, enter:\
`git pull upstream main`\

Then you can continue in the git workflow: checkout -> add -> commit -> push -> pull -> and so on.
<!-- [syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) -->

## Stage, commit, and push changes that you make
### Staging - `git add`
The `git add` command stages adds new or changed files to the staging area. You cannot commit files without first staging them. You can commit files individually, for example:\
`git add CONTRIBUTING.md`\
If you have made changes in multiple files, you can stage them all at once though, like this:\
`git add .`
### Commiting - `git commit`
Once your files are staged, you will be able to 'commit' them. You are saving the files while also tracking the changes that you have made in your feature branch. Commits are made with a short message that describes the changes that have been made. To do this in one line, type the following in the terminal:\
`git commit -m "added this/deleted that/fixed bug/et al"`
### Pushing - `git push`
Committing changes means they are saved to your local branch. To have the changes reflected on the remote branch you will need to push these changes. Using `git push` on its own only updates the corresponding branch on the remote. If you are working in a feature branch and want to update your main branch and the upstream branch with your changes, run this command:\
`git push --set-upstream origin [name-of-your-feature-branch]`
<!-- need to detail steps for creating an upstream path -->

## Submit a pull request
1. On GitHub, navigate to the project's [main repository](https://github.com/ScrimbaBootcamp/community-garden). 
2. Above the list of files, you will see a banner with a 'Compare & Pull Request' button. Click that to create a pull request for your feature branch. 
3. On the page to create a new pull request, click `compare across forks'.
4. On the next page, verify the base repository and head repository. The base repository will likely be `ScrimbaBootcamp/community-garden, base:main`, and the head repository should be `[Your user name]/community-garden, base:[feature-branch]`.
5. Type a title and a description for your pull request. You can use GitHub's formatting palette or use Markdown to format as applicable.
6. When you are finished, click 'Create Pull Request'.

## Resolving Merge Conflicts
<!-- This needs documentation -->