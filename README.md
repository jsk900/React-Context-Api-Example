This is a simple example of how to setup and use the context api with react hooks.

1. First we create the context as coded in the Context.js file
2. We then create the Container file. In this file we bring in the Context. We also declare all our states here using useState. We pass the states and their associated setState functions through the context provider.

3. Our main App will be wrapped with this container. This means we have access to all the states and their associated setState functions anywhere in our app, or in any component.

4. In component C which is a child of B, which in turn is a child of App we access the context.
