# John's website

This project is an exercise inspired by a [tutorial](https://www.youtube.com/watch?v=vkq7ckCkvjY).
That tutorial provides a Figma file with the design.
I created a duplicate of that file [here](https://www.figma.com/file/uIQEbawSgHcYBzLBWBZo8c/John?node-id=0%3A1).

The goal is to build a simple portfolio website and publish it on Heroku.

## The build engine

This project has been generated with [GoPablo](https://www.gopablo.co/), which has the technology choices very close to those made in the tutorial.

In particular, [Gulp](https://gulpjs.com/) is used as a build tool.

With Gulp, we can write HTML in a modular way, using [gulp-file-include](https://github.com/haoxins/gulp-file-include).

For writing CSS, we use here [PostCSS](https://postcss.org/) harness.
[TailwindCSS](https://tailwindcss.com/) helps to keep things easy.

For a better development experience in Visual Studio Code editor, see [this](https://stackoverflow.com/questions/47607602/how-to-add-a-tailwind-css-rule-to-css-checker) StackExchange question for possible solutions.

More information about GoPablo's features is available [here](https://jamstack.org/generators/gopablo/).

## The development workflow

Running `npm run dev` starts the development server at [http://localhost:3000](http://localhost:3000).
