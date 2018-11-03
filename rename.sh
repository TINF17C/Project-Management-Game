# A small programms which overides an old commiter with a new one.
# This is usefull if you commit with your work email instead of your personal one.
# To switch from gitlab to github:
# Clone from Gitlab; Make empty repo on github; Change your commiter with git config user.email; Then use the script;
# Then git remote add github --linktoGithubRepo-- ; Then git push --mirror github;


git filter-branch --commit-filter '
        if [ "$GIT_COMMITTER_NAME" = "Constantin Ruhdorfer" ];
        then
                GIT_COMMITTER_NAME="Constantin Ruhdorfer";
                GIT_AUTHOR_NAME="Constantin Ruhdorfer";
                GIT_COMMITTER_EMAIL="constantin.ruhdorfer@gmx.de";
                GIT_AUTHOR_EMAIL="constantin.ruhdorfer@gmx.de";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD