# Student Management

react-router-dom
@types/react-router-dom

/login
/admin: layout

/admin/*
feature: /admin/dashboard
feature: /admin/students

auth (authentication)
- login
- signup / register
- forget password

CLICK LOGIN
- Call API to login
- Success -> Redirect ADMIN
- FAILED -> Show Error
  
authSaga:

LOOP
- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN
- Call login API to get token + user info
- Set token to local storage
- Redirect to Admin page

LOGOUT
- Clear token from local storage
- Redirect to login page

authSlice
authSaga
