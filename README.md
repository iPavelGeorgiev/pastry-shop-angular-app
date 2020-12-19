# Pastry Shop
## How to Run Project Locally
1. Open the pastebin link and copy the code: https://pastebin.com/YZhLd44h

2. Create env.ts file in /src/environments and paste the code from pastebin there

3. Type in the terminal the following:
```bash
npm install
```
4. Start the project by typing in the terminal the following:
```bash
ng serve --open
```


## Project Dependencies
- Angular's default CLI dependencies
- Angular Material
- Firebase
- SweetAlert2

## List of all functionalities
1. Sign In
2. Sign Up
3. Sign Out
4. Add Cart Product
5. Remove Cart Product
6. Make An Order
7. Add Review
8. Edit Review
9. Remove Review
10. Sort Review By Timestamp
11. Soft Products By Timestamp

## Routing
Route | Description
------|------------|
/ | Public home page
/about-us | About us page
/products | Public or private products page
/reviews | Public or private Reviews page
/cart | Private user cart page
/auth/sign-in | Public sign in page
/auth/sign-up | Public sign up page

## DATA API

###### User
> - **email**: Email
> - **password**: Password

###### Product
> - **name**: Product name
> - **price**: Product price
> - **imgUrl**: Product image
> - **timestamp**: Product timestamp

###### Review
> - **userEmail**: User Email
> - **text**: Review text
> - **timestamp**: Review timestamp

###### Cart Item
> - **productId**: Product id
> - **quantity**: Product quantity