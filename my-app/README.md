This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The technologies that this app uses are React, Redux, ReduxThunk, isomorphicFetch
and react-js-pagination.

The application could have been constructed with plain JavaScript using the fetch API to get the data from the server. It also could have been constructed without the use of Redux and Redux-thunk.

The technologies selected were chosen as they allow the creation of large scale applications that otherwise would be very difficult to do. Also as React tries to manipulate the DOM as little is possible, the application is very fast.
The focus in scalability is also the reason for the React composition patterns that were used (function as a child, higher order components), although in this app they are not necessary and rather add complexity, in large scale projects they would simplify things.
Using a data provider that passes the data it fetches to its children as arguments decouples the data fetching from the presentation of the data, thus allowing the children to consume and present the data however they like. The same is true with the H.O.C. which can now enhance whichever component we want with a loader.

I use ReduxThunk to be able to dispatch actions when the client receives data since it is a middleware that provides a good balance of complexity and scalability. The only other middleware that I have used is Redux-Promise which is much less powerful and I don't have an opinion about Redux-Saga.

I used react-js-pagination instead of writing my own paginator.

What this app currently lacks and I may be adding in the future is:

* [ ] Progressive web app capabilities
* [x] Using the react-router to change the url according to the page displayed and
      to allow navigation via the browser arrows
* [x] CSS modules
* [ ] Style selected page
* [ ] Testing
* [ ] Post details view
* [ ] Server side rendering
* [ ] Custom paginator

To start the app:

1.  Run npm install
2.  Run npm start

Notes: Links on how to use css modules without ejecting

1.  https://medium.com/@kitze/configure-create-react-app-without-ejecting-d8450e96196
