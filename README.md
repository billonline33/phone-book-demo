# React Technical Excerise

## Phone Book

This is a simple phone book application using react and redux.
Follow the layout provided below.

```
---------------------------------------------------------
-   First Name  Last Name   Phone No.                   -
-   [        ]  [       ]   [       ]                   -
-                                                       -
-                                                       -
-                           [Save]    [Cancel]          -
-                                                       -
-  [First Name] | [Last Name] | [Phone Number] |        -
-   John        | Smith       | 1234           | [Edit] -
-               |             |                | [Edit] -
-               |             |                | [Edit] -
-               |             |                | [Edit] -
-               |             |                | [Edit] -
---------------------------------------------------------
```


#### Case 1: Add a new user

1.  Enter a first name, last name and phone number into the input fields.
2.  Clicking save should add the entry into a store. This store should be persistant i.e local storage. Once saved it should show in the table below.



#### Case 2: Show list of contacts

1.  List the contacts first name, last name and phone number in the table. The contact should load from the persistant store.

#### Case 3: Edit user

1.  Click the edit button next to the contact in the table and populate the input fields with the values.
2.  Modify the information and click save to update the existing record in the store.

#### Case 4: Cancel Edit Action

1.  Click the edit button to load the selected user data as above.
2.  Modify the information and click Cancel. The data should not be updated in local storage or table.



