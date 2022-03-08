var firstName = prompt('Enter Your First Name : ');
var lastName = prompt('Enter Your Last Name : ');
var firstLastPrint = firstName.toUpperCase() + lastName.toUpperCase();
document.write(firstLastPrint)

// character Finder
var firstNameCharFinder = firstName.charAt(1);
var lastNameCharFinder = lastName.charAt(1);
document.write('<br>' + 'First Name 1NO Character Of = ' + firstNameCharFinder)
document.write('<br>' + 'Last Name 1NO Character Of = ' + lastNameCharFinder)

// Length Check
var lengthTotal = firstName.length + lastName.length;
document.write( '<br/>' + 'Total Length = ' + lengthTotal);

