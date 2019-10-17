# Sundae Takehome Project (79 minutes, 20 seconds)

See the component live at [sundae.aaronyih.com](https://sundae.aaronyih.com).

## Challenges
* **considering semi-responsive behavior** — using the section on the live site as reference, I wanted to make sure that the button would stay directly in between the two columns, even when resizing the window. This took a couple iterations to get the proper behavior. The solution was to use a container to give the whole section a margin and then make each column 50% width.
* **strange flexbox child image aspect ratio issues** — for some reason, when setting a width on the image in the left column, the image would stretch to fit the width dimension and would not preserve the aspect ratio. Adding an explicit height as 'auto' did not work. The solution was to wrap the image in a containing div, set the image width to 100% and then change the width of the div.
* **the time limit** - I have never timed myself building a component, so it was in interesting excercise to see what I could actually get done in 1.5 hours!

## If I had more time, I would improve
* **responsive behavior** – On the live website, when the screen gets too small, the right column collapses under the left column and the text becomes center-aligned. This could easily be achieved with media queries. I would also set a min and max width on the text in the right column.
* **hover effect bug** – I was sort of just exprimenting here. I had this idea for an interaction that would focus your attention on a specific block of text. One problem seems to be that since there is a gap between the text and the numeral bullet (since the bullet is position absolute), there is some flickering behavior. I would probably have to rearrange the css so that the bullets aren't position absolute.
* **bullet point font-family** – For some reason, even though the font-family is set to Lato, it seems like the numerals are different from the ones on your live site. It may be that Lato needs to be included independently, which you may have done on the live site but I didn't do on here, so it's defaulting to sans-serif instead.
