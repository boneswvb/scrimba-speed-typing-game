Speed typing game - is a project with advance react training by Scrimba

This will be a series of chalanges to complete the project.

step 1

* Challenge: build the basic structure of our game
* 
* 1. <h1> title at the top
* 2. <textarea> for the box to type in 
*      (tip: React normalizes <textarea /> to be more like <input />, 
*      so it can be used as a self-closing element and uses the `value` property
*      to set its contents)
* 3. <h4> to display the amount of time remaining
* 4. <button> to start the game
* 5. Another <h1> to display the word count


step2

 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 * 
 * https://scrimba.com/p/p7P5Hd/cW8Jdfy

 Step 3

 * Challenge:
 * 
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 
 step 4

 * Challenge:
 * 
 * 1. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 * 2. Set up an effect that runs every time the `timeRemaining` changes
 *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
 * 
 *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
 *    a lot of extra work.
 * 
 *    Warning: there will be a bug in this, but we'll tackle that next
