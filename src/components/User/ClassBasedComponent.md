# Class Component


The Component has to include the extends React.Component
statement, this Statement creates an inheritance to React.Component,
and gives your component to acccess to React.Component functions


if there is a constructor() function in your component, this function will be called 
when the component gets intiated.

The constructor function is where you intiate the component's properties.

you will learn about state later in this tutorial

The constructor function is also where you honor the inheritance of the parent component by
including the super() statement, which executes the parent component's constructor function,
and your component has access to all the functions of the parent component


# Props in Class 

if your component  has a constructor functions, the props should always be passed to the constructor 
and also to the React.Component via a super() method 

# React Class Component State

React Class components have a built-in state object
The state object is where we save the property values of a class based component
When the state object changes the component re-renders

# Never update the state variable directly

# Changing the State Object

To change a value in the state object, use this.setState() method

When a value in the state object changes, the component will re-render, meaning the output will change 
according to the new value

## What is the background process is going on for the setState

So basically, let see the code

```
 
        this.state = {
            count: 0,
            count1,
            count2,
        }

        this.state variable has many proprties

        <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
        }}>Increase Count</button>

        Whenever i am clicking this button this.setState variable will call and react will take this value and check with the this.state variable. So, whenever there are one or more properties it will check the properties of the setState variable and state variable, compare them and change the value according to the setState variable properties.

        So whichever properties is match by there reconcilliation algorithim also know as diff algorithim
        the properties value get changed and re-render the components.

        Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods).

```

# Component Did Mount

Component Did Mount is a method which we execute for API Calls.

1) Whenever a class component is executed, the constructor will get intialize and create the properties afte that render method will be invoked and after that the componentDidMount will be called


2) If there is a Parent and Child based Class Component so the parent class is executed, the constructor get intialized, render method is called and in that Child Based Class Component will get executed.

For child based Component same procedure will be there it will intialize the constructor, rendering method
and the child based componentDidMount will be called after the wholde child based class component is executed then the Parent Based componentDidMount will be callled.
