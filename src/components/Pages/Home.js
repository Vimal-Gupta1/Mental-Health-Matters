import React from "react";
import "./styles/Home.css";
const logo = require("./Images/background-home.jpg");
export const Home = () => {
  return (
    <>
      <img src={logo} alt="body" />
      <div>
        We declare the count state variable, and then we tell React we need to
        use an effect. We pass a function to the useEffect Hook. This function
        we pass is our effect. Inside our effect, we set the document title
        using the document.title browser API. We can read the latest count
        inside the effect because it’s in the scope of our function. When React
        renders our component, it will remember the effect we used, and then run
        our effect after updating the DOM. This happens for every render,
        including the first one. Experienced JavaScript developers might notice
        that the function passed to useEffect is going to be different on every
        render. This is intentional. In fact, this is what lets us read the
        count value from inside the effect without worrying about it getting
        stale. Every time we re-render, we schedule a different effect,
        replacing the previous one. In a way, this makes the effects behave more
        like a part of the render result — each effect “belongs” to a particular
        render. We will see more clearly why this is useful later on this page.
        Tip Unlike componentDidMount or componentDidUpdate, effects scheduled
        with useEffect don’t block the browser from updating the screen. This
        makes your app feel more responsive. The majority of effects don’t need
        to happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:We declare the
        count state variable, and then we tell React we need to use an effect.
        We pass a function to the useEffect Hook. This function we pass is our
        effect. Inside our effect, we set the document title using the
        document.title browser API. We can read the latest count inside the
        effect because it’s in the scope of our function. When React renders our
        component, it will remember the effect we used, and then run our effect
        after updating the DOM. This happens for every render, including the
        first one. Experienced JavaScript developers might notice that the
        function passed to useEffect is going to be different on every render.
        This is intentional. In fact, this is what lets us read the count value
        from inside the effect without worrying about it getting stale. Every
        time we re-render, we schedule a different effect, replacing the
        previous one. In a way, this makes the effects behave more like a part
        of the render result — each effect “belongs” to a particular render. We
        will see more clearly why this is useful later on this page. Tip Unlike
        componentDidMount or componentDidUpdate, effects scheduled with
        useEffect don’t block the browser from updating the screen. This makes
        your app feel more responsive. The majority of effects don’t need to
        happen synchronously. In the uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect. Effects with Cleanup Earlier, we looked at
        how to express side effects that don’t require any cleanup. However,
        some effects do. For example, we might want to set up a subscription to
        some external data source. In that case, it is important to clean up so
        that we don’t introduce a memory leak! Let’s compare how we can do it
        with classes and with Hooks. Example Using Classes In a React class, you
        would typically set up a subscription in componentDidMount, and clean it
        up in componentWillUnmount. For example, let’s say we have a ChatAPI
        module that lets us subscribe to a friend’s online status. Here’s how we
        might subscribe and display that status using a class:
      </div>
    </>
  );
};
export default Home;
