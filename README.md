# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./desktop_preview.png)

### Links

- Solution URL: [github](https://your-solution-url.com)
- Live Site URL: [netlify](https://izrael-product-list-with-cart.netlify.app/)

## My process

### Built with

- JavaScript XML
- CSS Grid
- Flexbox
- Context API
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

I learned how to keep all my logic in a separate file, away from my UI. This approach allows me to easily import the logic into different components where I need it, which I feel is more structured and clean. I also learned how to integrate a third-party API (Paystack) ✨ and use the <picture> element to deliver responsive images based on different screen sizes.

```html
<picture className="">
  <source srcset="{image.mobile}" media="(min-width: 375px)" />
  <source srcset="{image.tablet}" media="(min-width: 768px)" />
  <source srcset="{image.desktop}" media="(min-width: 769px)" />
  <img
    src="{image.thumbnail}"
    alt="cart item"
    className="w-full h-[186px] rounded-lg"
  />
</picture>
```

```js
const addToCart = (item) => {
  setCartItems((prevItems) => {
    // Check if item is already in cart
    const existingItem = prevItems.find(
      (cartItem) => cartItem.name === item.name
    );
    // If item is already in cart, update quantity
    if (existingItem) {
      setShowMessage(true);
      return prevItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1, isSelected: true }
          : cartItem
      );
      // If item is not in cart, add item with quantity of 1
    } else {
      setShowMessage(true);
      return [...prevItems, { ...item, quantity: 1, isSelected: true }];
    }
  });
};
```

### Continued development

I will like to add customized alerts to diplay information.

### Useful resources

- [React Paystack](https://paystack.com/docs/guides/accept_payments_on_your_react_app/) - This helped me to integrate paystack API. It was very explanatory and easy to follow.
- [Tailwind CSS](https://tailwindcss.com/) - The documentation helped me leverage Tailwind's utility classes in place of vanilla CSS.

## Author

- Frontend Mentor - [@Arkorede](https://www.frontendmentor.io/profile/Arkorede)
- Twitter - [@IsraelAshaolu](https://twitter.com/IsraelAshaolu)

## Acknowledgments

I'm grateful for my friends who gave reviews that made me to make the application look better and more realistic.
