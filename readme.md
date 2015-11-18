# readme example

Pipe a code example into a readme template


## install

    $ npm install readme-example


## example

Templates are underscore style.

_readmeTmpl.md:

    # my module

    ## example

    ```js
    <%= example %>
    ```


On the command line:

    $ cat example/code.js | readme-example > readme.md
