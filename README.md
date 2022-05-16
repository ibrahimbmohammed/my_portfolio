This is indeed a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), however in order to have a consistent and cohernt code base that conforms to modern standards and best practices, there might be certain conventions you might want to be familier with before jumping into the project. 


## Project Set up

 1.  git clone https://github.com/peddlesoft/headless-typescript.git, clone project from the git repository to your working directory on your machine.
 2.  run the `yarn` command on you system to install all needed dependencies in your project, please use yarn, as it is the package manage of choice for this project. dont have yarn ? [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
 3. vs code settings, make sure you have the eslint and prettier extensions installed on you vs code, in your vscode make prettier your defualt formater, and enable the format on save feature on your vs code. 
## Getting Started

First, run the development server:

```bash
yarn dev
```

## Component Hierarchy &  Pseudo Entry Points 

`
page/_app.tsx
lib/hoc/home-wrapper
lib/hoc/admin-wrapper
lib/hoc/conference-wrapper
`

this are the pseudo entry points to this application, this approach makes the _app.tsx clean and delegating other responsibilities to the HOCs , the HOC are responsible for the theming logic.   

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

storybook is used for ui documentation, all components must have an associated storybook file, for components that need data for render, appropriate data should be mocked in a seperate file .

`
components/molecules/m-card-events-main/index.tsx
components/molecules/m-card-events-main/m-event-card.stories.tsx
components/molecules/m-card-events-main/m-mock-event-card-data.ts
`


## Typescript

#### Type Generation

 ``
 yarn codegen 
 ``

 to generate types for graphql queries and mutation, this should happen when modifications are made to the graphql folder. types reside in the:

 `
 generated types folder
 lib/types/gentypes

 custom types folder
 lib/types/organism-types
 `
 > #### Components Interfaces and Interface Naming Convention
 >  interface should reside in the same file as it's  component. and the Name of the component should be the name of the interface adding Props as a sufix to  it. **Dont use the I prefix** , as this was discouraged by the typescript team , wrong would be __Icomponent__, and example of the proper naming convention is below.
 
 ` 
 interface MyComponentProps {
  property : string
  ..... : ..


 const MyComponent = () => ....
 }
 `
 > keys of the interface should have the same name as the keys of the properties the component is expecting,  its should match the keys of the properties returned by the backend
 > this can be disregarded only if the interface is repeated more than twice, or the interface is more than 15 lines long, then it make sense to abstract at that point.
 
 #### Importing Types,  File Importing Hierarchy

 `
 1. import type { someType } from 'somedir'
 2. import library code 'react' followed by  installed packages if any and if needed'
 3. import custom hooks if needed
 4. import utils 
 5. import pagelayout
 6. import ui-layout
 7. import  atoms
 8. import molecules
 9. import orgnisms
 `

#### Other allowed syntax

`
import MyComponent, {MyComponentProps} from 'somedir'
`
with this you can access both the component and its type.

## Data Fetching

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
