# Ambesiwe-Designs
A multi page website built for Ambesiwe Designs, a bespoke tailoring shop based in Komani (Queenstown) specializing in custom traditional Xhosa attire, wedding wear and beaedwork.

---
## Site Pges
index.html - Home page and brand showcase
about.html - Brand story, core values and founder profiel
services.html - List of custom tailoring and alteration services
enquiry.html - Booking and quote enquiry form
contact.html - Location, contact details and operating hours
---
## Built with
HtMl5
Visual Studio Code
Git&Github
---
## How to Run
1. Clone or download the repository
2. Open the project folder in Vs Code
3. Launch index.html using the live in any browser

4. # POE Part 2 : CSS styling
   ## Overview
   Part 2 of the Ambesiwe Designs web application focuses on transforming the core HTML skeleton into fully interactive, mobile responsive digital showroom using CSS.
---
## Technical CSS Implememntation 
### 1. Layout Engine and Architecture 
- **CSS Grid Systems:** Used .services grid with repeat (auto-fit, minimax280px , fr ) to arrange service card neatly in rows.
- **FLexbox:** Used Flexbox to line up menu links, form items and footer icons.
- **Page Resets:** Added box-sizing: border-box and max width : 100% so content does not overflow off the screen.
- 
- ## 2. Mobile Responsive Design
- ** Media Queries:** Added @media screen and (max-width: 768px) to stack items vertically on small screens and phones.
- **Fluid Images:** Set object fit: cover and dynamic widths on images so they scale without stretching or breaking the layout.
- **Mobile Forms** Adjusted input padding and text size to make typing easy on phone touchscreens.

- ## 3. Colors and Interactivity
- **Brand Colors:** Applied Royal blue , warm Terracotta and soft Ochre across the site.
- **Hover and Focus Effects:** Added zoom effects on pictures when hovered, smooth button hover animations and blue border outlines when clicking into input boxes.
- **Form Layout:** fixed spacing between label and <textare> tags so text does not overlap.

- ---

## file Structure 
- css/style.css - Main stylesheet for all layout rules, colors, forms and mobile screen updates.

-  ---

## References
1. **W3C CSS Grid and Flexbox Guides**
 - Mozilla Developer Network (MDN). *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
 - Mozilla Developer Network (MDN). *Basic Concepts of Flexbox*. Available at: https://developer.mozilla.org/en-US/docs/CSS_layout/flexbox
   
2. **Responsive Design Standards**
   - Marcotte, E., 2010. *Responsive Web Design*. A List Apart. Available at: https://alistapart.com/article/responsive-web-design/
     
3. **External Libraries**
   - Font Awesome Icon CDN. Available at: https://cdjns.cloudflare.com/ajax/libs/font-awesome/
  - W3Schools Web Safe Fonts Guide. Available at: https://w3schools.com/css_websafe_fonts.php
---
   ## POE PART 3 JavaScript
 ### Overview
 Part 3 introduces advanced front-end scripting and user experience enhancements to make the Ambesiwe Designs website fully dynamic and responsive.
 
 ### Technical JavaScript and UX Features
 * **1. Universal lightbox Gallery:**
 *  **Dynamic Modal Control: Automatically injects clicked image sources into a fixed screen overlay modal ('#lightboxModal') with centered framing ('max-width:60%,'max height : 70vh').
 *  **Event Handlers:** Configured closing triggers via an explicit close button  and background are clicks.

* **2. Interactive Service Accordions:**
* **Class-Based Toggling:** Used '.active' class toggling to expand and collapse service description content dynamically.
* **Visual Feedback:** Programmed chevron icons ('fa-chevron-down' / 'fa-chevron-up) to rotate smoothly upon user click interactions.
* **3. Enquiry Form Validation:**
* **Input Checking:** Validates user form submissions to ensure essential fields (name, email, message) contain valid data before processing.
* **Dynamic Feedback:** Provides immediate interface responses and calculation handling upon successful form submission.
  
  
  
 
  
   
