This is indeed a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), however in order to have a consistent and cohernt code base that conforms to modern standards and best practices, there might be certain conventions you might want to be familier with before jumping into the project. 


## Project Set up

 1 git clone https://github.com/peddlesoft/headless-typescript.git, clone project from the git repository to your working directory on your machine.
 2  run the `yarn`` command on you system to install all needed dependencies in your project, please use yarn, as it is the package manage of choice for this project. dont have yarn ? [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
 3 vs code settings
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Component Hierarchy &  Pseudo Entry Points 

## Folder Structure & Design system

As can be observed from the folder structure,the folder structure follows the atomic design principle, so it is imperative for you to follow suit, components should go to the appropriate folders during or after building them :

```
components/atoms
components/molecules
components/organisms
```

To learn more about Atomic Design, take a look at the following resources:

- [Atomic Design Resource](https://bradfrost.com/blog/post/atomic-web-design/) - learn about atomic design.
- [Atomic Design Resource](https://uxdesign.cc/atomic-design-how-to-design-systems-of-components-ab41f24f260e) - learn more.

##### More on Folder Structure

To simplify things further we abstrated atomics design  templates into Hocs and layouts , this gives pages consistent layout and structure, 

###### difference between HOC and layout

> HOC are general templates that wrap a page adding  functionality(data fetching (*only when needed*), complex logics, components) to it. 

> Layouts are concern with only css layout or style layout (moslty abstracted into components or group of components) that are repeated either across pages(page layout) or repeated across components(ui layout), this layouts should not contain any data fetching inside them, or logics related to data fetching. 


```
lib/hoc/home-wrapper
lib/hoc/admin-wrapper
lib/layout/page-layout
lib/layout/ui-layout
```

##### Naming Individual Components

When naming Individual components , which can either be an atom, molecule or organism for consistency and clearity, file name should be in lowercase words separated by hyphens, and should follow the BEM convention, which is illustrated below.

![File Naming Convention](https://miro.medium.com/max/1400/0*ijUbJg2nzgbXucgw.png)


```bash
-- without modifiers
* a-button
* m-footer
* o-navbar

-- with modifiers

* a-button-admin
* m-footer-admin
* o-navbar-with-searchbar

```

Open [File Naming Convention Resource](https://medium.com/@masacarvalho/atomic-design-system-with-abem-naming-convention-part-1-983d7d6ec3d7) learn more.


## StoryBook & UI documentation



## Generated Types


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
