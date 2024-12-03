document.getElementById('towtruck-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents form submission for now
    
    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const vehicleDetails = document.getElementById('vehicle-details').value;

    // Just log the form data (for now)
    console.log('Request Submitted!');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Location:', location);
    console.log('Vehicle Details:', vehicleDetails);
    
    // You can replace this with actual API calls later to submit the form data to a server
    alert('Tow Truck Request Submitted! We will contact you shortly.');
});
