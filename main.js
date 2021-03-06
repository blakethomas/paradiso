var products = [
  {
    name:'Ethiopian Coffee',
    price:12.95,
    imgSrc:'https://images.pexels.com/photos/34085/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb',
    details: {
      origin:'Addis Abada, Ethiopia',
      description: 'Has a strong kick and keeps you up all morining.',
      aroma:'Chesnuts, Dark Chocolate, Tobacco',
      ammount: '1 lbs'
    },
  },
  {
    name:'Colombian Coffee',
    price:15.95,
    imgSrc:'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?h=350&auto=compress&cs=tinysrgb',
    details: {
      origin:'Bogota, Colombia',
      description: 'A mild, well balanced bean for all types of cofffee lovers.',
      aroma:'Caramel, Nuts, Butter',
      ammount: '1 lbs'
    }
  },
  {
    name:'Espresso Machine',
    price:1999.95,
    imgSrc:'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?h=350&auto=compress&cs=tinysrg',
    details: {
      origin:'Florence, Italy',
      description: 'A machine made to satisfy all your espresso needs.',
      aroma:'N/A',
      ammount: '1 Unit'
    }
  },
  {
    name:'Vietnamese Coffee',
    price:12.95,
    imgSrc:'https://images.pexels.com/photos/6067/coffee-flower-reading-magazine.jpg?h=350&auto=compress&cs=tinysrgb',
    details: {
      origin:'Ho Chi Minh, Vietnam',
      description: 'A bold, caffeine filled bean that is for experienced coffee drinkers',
      aroma:'Toffee, Hazelnut',
      ammount: '1 lbs'
    }
  },
  {
    name:'Hawaiian Coffee',
    price:14.95,
    imgSrc:'https://images.pexels.com/photos/2059/restaurant-red-beans-coffee.jpg?h=350&auto=compress&cs=tinysrgb',
    details: {
      origin:'Kawaii, Hawaii',
      description: 'A kona blend for those who love that traditional Hawaiian taste.',
      aroma:'Caramel, Cashew',
      ammount: '1 lbs'
    }
  },
  {
    name:'Jamaican Coffee',
    price:16.95,
    imgSrc:'https://images.pexels.com/photos/544117/pexels-photo-544117.jpeg?h=350&auto=compress&cs=tinysrgb',
    details: {
      origin:'Kingston, Jamaica',
      description: 'A delicious bean, complimented by perfect herbal flavor notes.',
      aroma:'Herbal',
      ammount: '1 lbs'
    }
  },
  {
    name:'French Press',
    price:99.95,
    imgSrc:'https://cdn.gearpatrol.com/wp-content/uploads/2016/03/better-coffee-at-home-gear-patrol-french-press.jpg',
    details: {
      origin:'Nice, France',
      description: 'A machine made for the ultimate cup of joe.',
      aroma:'N/A',
      ammount: '1 Unit'
    }
  },
  {
    name:'Cold Brew Maker',
    price:49.95,
    imgSrc:'https://cdn.gearpatrol.com/wp-content/uploads/2016/03/better-coffee-at-home-gear-patrol-cold-brew-maker.jpg',
    details:{
      origin:'Los Angeles, United States',
      description: 'A contraption for making coffee with cold water.',
      aroma:'N/A',
      ammount: '1 Unit'
    }
  },
  {
    name:'Automated Coffee Machine',
    price:399.95,
    imgSrc:'https://cdn.gearpatrol.com/wp-content/uploads/2016/03/better-coffee-at-home-gear-patrol-coffee-maker.jpg',
    details: {
      origin:'Philadelphia, United States',
      description: 'A machine made that does all the work for you.',
      aroma:'N/A',
      ammount: '1 Unit'
    }
  }
]

var counter = 0

var priceHolder = 0

var cart = []

var $circleIcon = document.createElement('i')

var $container = document.createElement('div')
$container.classList.add('container')

var $row = document.createElement('row')
$row.classList.add('row')

var $exit = document.createElement('div')
var $cart = document.createElement('div')
var $cartTable = document.createElement('table')
var $priceRow = document.createElement('tr')
var $priceName = document.createElement('td')
var $totalPrice = document.createElement('td')
var $spaceHolder = document.createElement('td')

$spaceHolder.textContent = ''
$priceName.textContent = 'Price:  '


var $cartIcon = document.querySelector(".fa-shopping-cart")

$cartIcon.addEventListener('click', function(){
  $cart.classList.toggle('disappear')
})


/*returns HTML version of the cart*/
function renderCart(product){

  var $cartRow = document.createElement('tr')
  var $itemCount = document.createElement('td')
  var $cartItem = document.createElement('td')
  var $removeHolder = document.createElement('td')
  var $removeButton = document.createElement('button')

  $removeButton.addEventListener('click', function(){
    $cartRow.textContent = ''
    counter = counter - 1
    priceHolder = priceHolder - product.price
    $totalPrice.textContent = Math.round(priceHolder)
    if(counter === 0){
      $circleIcon.classList.remove('fa', 'fa-circle')
    }
  })

  $itemCount.textContent = 1
  $totalPrice.textContent = '$ ' + Math.round(priceHolder)
  $cart.classList.add('card', 'pop-out-cart', 'disappear')
  $cartItem.textContent = null
  $cartItem.textContent = $cartItem.textContent + product.name
  $removeButton.classList.add('btn', 'btn-default')
  $removeButton.textContent = 'Remove'


  $cartIcon.appendChild($cart)
  $cart.appendChild($cartTable)
  $cartTable.appendChild($cartRow)
  $cartTable.appendChild($priceRow)
  $priceRow.appendChild($spaceHolder)
  $priceRow.appendChild($priceName)
  $priceRow.appendChild($totalPrice)
  $cartRow.appendChild($itemCount)
  $cartRow.appendChild($cartItem)
  $cartRow.appendChild($removeHolder)
  $removeHolder.appendChild($removeButton)

  return $cart
}

/* returns the table of info for each product description*/
function renderDetails(product){

  $exit.classList.add('thumbnail', 'exit', 'text-center', 'rounded')
  $exit.addEventListener('click', function(){
    $container.classList.remove('filter')
    $exit.classList.remove('exit', 'thumbnail')
    $exit.innerHTML = ''
  })
  var $exitButton = document.createElement('button')
  $exitButton.classList.add('btn','btn-default', 'exit-btn')
  $exitButton.textContent =  'X'

  var $addButton = document.createElement('button')
  $addButton.classList.add('btn', 'btn-default', 'add-button')
  $addButton.textContent = 'Add To Cart'

  $addButton.addEventListener('click', function(){
    cart.push(product)
    counter ++
    priceHolder = priceHolder + product.price
    $cartIcon.appendChild($circleIcon)
    renderCart(product)
    $cart.classList.add('disappear')
    $circleIcon.classList.add('fa', 'fa-circle')
    $circleIcon.setAttribute('aria-hidden', 'true')
  })

  var $details = document.createElement('div')
  $details.classList.add('card-body', 'rounded')

  var $title = document.createElement('h2')
  $title.textContent = product.name
  $title.classList.add('card-title')

  var $table = document.createElement('table')

  var $row = document.createElement('tr')

  var $originCell = document.createElement('td')
  $originCell.textContent = 'Origin: '

  var $originContent = document.createElement('td')
  $originContent.textContent = product.details.origin

  var $rowTwo = document.createElement('tr')

  var $descriptionCell = document.createElement('td')
  $descriptionCell.textContent = 'Description: '

  var $descriptionContent= document.createElement('td')
  $descriptionContent.textContent = product.details.description

  var $rowThree = document.createElement('tr')

  var $aromaCell = document.createElement('td')
  $aromaCell.textContent = 'Aromas: '

  var $aromaContent = document.createElement('td')
  $aromaContent.textContent = product.details.aroma

  var $rowFour = document.createElement('tr')

  var $ammountCell = document.createElement('td')
  $ammountCell.textContent = 'Quantity: '

  var $ammountContent = document.createElement('td')
  $ammountContent.textContent = product.details.ammount

  var $price = document.createElement('p')
  $price.textContent =  'Price: ' + product.price
  $price.classList.add('details-price')

  $exit.appendChild($exitButton)
  $exit.appendChild($title)
  $exit.appendChild($details)
  $exit.appendChild($price)
  $exit.appendChild($addButton)
  $details.appendChild($table)
  $table.appendChild($row)
  $row.appendChild($originCell)
  $row.appendChild($originContent)
  $table.appendChild($rowTwo)
  $rowTwo.appendChild($descriptionCell)
  $rowTwo.appendChild($descriptionContent)
  $table.appendChild($rowThree)
  $rowThree.appendChild($aromaCell)
  $rowThree.appendChild($aromaContent)
  $table.appendChild($rowFour)
  $rowFour.appendChild($ammountCell)
  $rowFour.appendChild($ammountContent)

  return $exit
}

/* returns the product*/
function renderProduct(product){
  var $product = document.createElement('div')
  $product.classList.add('col-lg-4', 'col-sm-6')

  var $thumbnail = document.createElement('div')
  $thumbnail.classList.add('thumbnail')
  $thumbnail.addEventListener('mouseover', function(){
    $info.classList.remove('invisible')
  })
  $thumbnail.addEventListener('mouseout', function(){
    $info.classList.add('invisible')
  })

  var $img = document.createElement('img')
  $img.classList.add('picture-target')
  $img.src = product.imgSrc

  var $info = document.createElement('button')
  $info.classList.add('invisible', 'info-button', 'btn', 'btn-default')
  $info.textContent = 'View Details'
  $info.addEventListener('click', function(){
    $container.classList.add('filter')
    document.body.appendChild(renderDetails(product))
  })

  var $name = document.createElement('p')
  $name.classList.add('product', 'text-center')
  $name.textContent = product.name

  var $price = document.createElement('p')
  $price.classList.add('price', 'text-center')
  $price.textContent = product.price

  $product.appendChild($thumbnail)
  $thumbnail.appendChild($img)
  $thumbnail.appendChild($info)
  $thumbnail.appendChild($name)
  $thumbnail.appendChild($price)

  return $product
}

document.body.appendChild($container)
$container.appendChild($row)

/*Loops through each product and renders it to the page*/
for(var i = 0; i < products.length; i++){
  $row.appendChild(renderProduct(products[i]))
}
