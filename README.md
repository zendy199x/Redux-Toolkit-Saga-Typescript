# Student Management

react-router-dom
@types/react-router-dom

/login: 
/admin: layout

/admin/*
feature: /admin/dashboard
feature: /admin/students

auth / authentication
- login
- sign up / register
- forget password

CLICK LOGIN
- Call API to login
- Success --> redirect ADMIN
- FAILED --> show ERROR

LOGIN 
LOGOUT

authSaga

LOOP
- if logged in, watch LOGOUT
- else watch LOGIN


LOGIN
- call login API to get token + user info
- set token to local storage
- redirect to admin page

LOGOUT
- clear token from local storage
- redirect to login page

authSlice
authSaga

----

### Different ways to handle navigation in Redux Saga

1. Watch redux store and make redirect on component

```jsx
const function App() {
  const loginSuccess = useAppSelector(state => state.auth.loginSuccess)
  
  useEffect(() => {
    if (loginSuccess) {
      // redirect to admin page
    }
  }, [loginSuccess])

  // ...
}
```
--> Flow is fragmented, hard to control when you have more and more state.

2. Using callbacks

- This approach using non-serializable (callback) in action and dispatch to redux store which is **NOT RECOMMENDED** BY Redux Toolkit.

```jsx
const function App() {
  const dispatch = useAppDispatch();
  
  const handleLoginSubmit = (values) => {
    dispatch(authActions.login({
      ...values,
      onSuccess: () => history.push('/admin'),
      onError: () => console.log('Notify error to user'),
    }))
  }

  // ...
}
```

3. Using connected-react-router

- Sync routings to redux.
- Navigate by dispatching an action to redux store.
- One thing to make sure, when route changes, it doesn't cause re-render our components.

--> We'll go with this solution for now.

Lib: connected-react-router + custom history

### Handle loading / error in redux saga

- RTK + Thunk: provide a way to await an async action right on component
--> Handle loading/error on component easily

- RTK + Saga: doesn't have a way to do so
--> what to do?

imho, my suggestions:
- LOADING: can based on redux store
- ERROR: eliminate the usage as much as you can. 

Considerations:
- Trigger error toast from saga.
- Consider to call API directly on component instead of going through saga.

### Students


ROUTINGS
- /admin/students: listing
- /admin/students/add: add new student
- /admin/students/:studentId: update a student

LISTING

- Search by name
- Filter by city
- Sort by name, mark
- Pagination

student slice state:
- loading
- list
- pagination
- filter { page: 1, limit: 10, ... }



ADD/EDIT
- React Hook Form v7 
- Yup


ROUTINGS
- /admin/students/add: add new student
- /admin/students/:studentId: update a student

Student Form
- Mode: Add/Edit
- Initial values
- Values
  - name: Text Input
  - age: Number Input
  - gender: Radio options
  - city: Select
  - mark: Number Input
- Validations: all required
  - name: at least two words
  - age: >= 18
  - gender: male / female
  - city: required
  - mark: 0 -> 10
- Submission: redirect to student list page after submitting successfully