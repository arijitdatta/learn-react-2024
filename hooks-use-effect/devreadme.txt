useEffect is an important hook. 

When AFTER RENDERING, something needs to be called OUTSIDE the react application (usually) only then the use effect should be used. 

https://react.dev/learn/synchronizing-with-effects

During development, Strict Mode is on, and therefore components are rendered twice. You will see this in the console logs.
By switching off the strict mode, components will be rendered only once. 
https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar