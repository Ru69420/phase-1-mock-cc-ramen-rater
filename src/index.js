const baseUrl = 'http://localhost:3000'

// - GET `/ramens`
// - GET `/ramens/:id`

const ramenMenu = document.getElementById('ramen-menu')
const newRamenForm = document.getElementById('new-ramen')

fetch(`${baseUrl}/ramens`)
  .then(res => res.json())
  .then(ramenObjects => {
   
    ramenObjects.forEach(ramenObject => renderRamen(ramenObject))
  })


//   - See all ramen images in the `div` with the id of `ramen-menu`. When the page
//   loads, request the data from the server to get all the ramen objects. Then,
//   display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.:done



// - Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.:done


// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.




function renderRamen(ramen) {
  
  const newImg = document.createElement('img')

 
  newImg.addEventListener('click', () => ramenSelector(ramen))

  
  newImg.src = ramen.image

  
  ramenMenu.appendChild(newImg)
}

function ramenSelector(ramen) {
  
  const ramenDetailDiv = document.getElementById('ramen-detail')

  
  const img = ramenDetailDiv.querySelector('img')
  img.src = ramen.image

  
  const h2 = ramenDetailDiv.querySelector('h2')
  h2.innerText = ramen.name

  
  const h3 = ramenDetailDiv.querySelector('h3')
  h3.innerText = ramen.restaurant

  
  const rating = document.getElementById('rating-display')
  rating.innerText = ramen.rating

  
  const comment = document.getElementById('comment-display')
  comment.innerText = ramen.comment
}

newRamenForm.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()

  
  const ramen = {}

  
  ramen.name = e.target.name.value
  
  ramen.restaurant = e.target.restaurant.value
  
  ramen.image = e.target.image.value
  
  ramen.rating = e.target.rating.value
  
  ramen.comment = e.target["new-comment"].value

  
  renderRamen(ramen)

  
  newRamenForm.reset()
}

// stuck on     HOW TO MAKE THE NEW RAMEN FORM work as expected
// add new rame -> name , restaurant , image , rating , comment -> create
