## Namaste React Course by Akshay Saini

# Episode 08 - Let's get Classy

## Q: What is the order of life cycle method calls in `Class Based Components`?

A: Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Q: Why do we use `componentDidMount`?

A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
We can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

## Q: Why do we use `componentWillUnmount`? Show with example.

A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

## Q: (Research) Why do we use `super(props)` in constructor?

A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

## Q: (Research) Why can't we have the `callback function` of `useEffect async`?

A: `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.

## Problem with SPA (Single Page Application)
Suppose, when you have a setInterval(1000) of 1sec in one about page of our application in componentDidMount() and since componentDidMount() is trigger every time we come into the about page then following problem occurs : 
    - It keeps on calling setTimeInterval() again and again even when we change to other page like contact, home page, etc.. because its a SPA so our page doesnot gets refresh only the component is rendered/mounted again so going to other page also triggered setInterval().

    - When we go to about page again from contact suppose then the setInterval() time increase from 1sec to 2sec.

    - So, we use this.clearInterval() in ComponentWillUnmount() method to unmount the components when we move to new page. 

# Since all of it happend in class component what is its alternative in functional component? 
- In functional component, we use return keyword which works exactly same as unmounted() i.e., will trigger when we leave the page. 
  For example : 
  useEffect(() =>{
    console.log("use Effect");

    return ()=>{
        console.log("use Effect return");
    }
  }, [])

    return(
        console.log("render");
    )

    Output will be as follows : 
        - 1st : render
        - 2nd : useEffect
    ---- end ----
    But when will the use Effect return print in the console? Remember it behave as a unmounted function and this will only be triggered when we change to other page and hence when we leave the current page by clicking on other page suppose contact then the 3rd output will
    be printed i.e., "use Effect return"

    In the image above, see the commented line if we write setInterval inside useEffect() functional component then it will also keep printing "Namaste react OP" after every second. And, when we move to new page it will speed up the printing and will never stop so we have to use return just like unmounted in class component.