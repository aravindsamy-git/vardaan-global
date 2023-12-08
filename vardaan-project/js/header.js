document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        var animatedBox = dropdown.querySelector('.animated-box2');
        var dropdownContent = dropdown.querySelector('.dropdown-content');

        animatedBox.addEventListener('click', function () {
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        });

        document.addEventListener('click', function (event) {
            if (!dropdown.contains(event.target)) {
            }
        });
    });
});

document.getElementById('animated-box2').addEventListener('click', function () {
    this.classList.toggle('clicked');
});

document.addEventListener('DOMContentLoaded', function () {
    var flagDropdown = document.querySelector('.flag-dropdown-content');
    var flagBtn = document.querySelector('.flag-btn');
    var selectedFlag = document.getElementById('selected-flag');
    var logoImg = document.getElementById('logo-img');

    flagBtn.addEventListener('click', function () {
        flagDropdown.style.display = (flagDropdown.style.display === 'block') ? 'none' : 'block';
    });

    flagDropdown.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            if (event.target.alt === 'Malaysia Flag') {
                logoImg.src = "image/logo-mly.png"
                selectedFlag.src = event.target.src;
            }
            else {
                logoImg.src = "image/Vardaanlogo-uk-removebg-preview 1.png";
            }

            selectedFlag.src = event.target.src;
        }
    });

    document.addEventListener('click', function (event) {
        if (!flagBtn.contains(event.target) && !flagDropdown.contains(event.target)) {
            flagDropdown.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', function () {
        dropdownMenu.style.display = (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') ? 'block' : 'none';
    });

    document.addEventListener('click', function (event) {
        if (!toggleBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    function updateDropdownDisplay() {
        if (window.innerWidth > 969) {
            dropdownMenu.style.display = 'none';
        }
    }
    updateDropdownDisplay();

    window.addEventListener('resize', updateDropdownDisplay);
});

document.addEventListener('DOMContentLoaded', function () {
    var dropdownres = document.querySelector(".dropdown-res");
    var flagbtnres = document.querySelector(".flag-btn-res")
    var flagdropdowncontentres = document.querySelector(".flag-dropdown-content-res")

    dropdownres.addEventListener('click', function (event) {
        var service1 = document.querySelector('.dropdown-menu li:nth-child(3)');
        var service2 = document.querySelector('.dropdown-menu li:nth-child(4)');
        var service3 = document.querySelector('.dropdown-menu li:nth-child(5)');
        var service4 = document.querySelector('.dropdown-menu li:nth-child(6)');

        if (service1.style.display === "none" || service1.style.display === "") {
            service1.style.display = "block";
            service2.style.display = "block";
            service3.style.display = "block";
            service4.style.display = "block";
        } else {
            service1.style.display = "none";
            service2.style.display = "none";
            service3.style.display = "none";
            service4.style.display = "none";
        }
    });

    flagbtnres.addEventListener('click', function (event) {
        if (flagdropdowncontentres.style.display === 'none' || flagdropdowncontentres.style.display === "") {
            flagdropdowncontentres.style.display = 'block';
        } else {
            flagdropdowncontentres.style.display = 'none';
        }
    })


});

document.addEventListener('DOMContentLoaded', function () {
    var flagDropdown = document.querySelector('.flag-dropdown-content-res');
    var flagBtn = document.querySelector('.flag-btn-res');
    var selectedFlag = document.getElementById('selected-flag-res');
    var logoImg = document.getElementById('logo-img');

    flagDropdown.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            if (event.target.alt === 'Malaysia Flag-1') {
                logoImg.src = "image/logo-mly.png"
                selectedFlag.src = event.target.src;
            }
            else {
                logoImg.src = "image/Vardaanlogo-uk-removebg-preview 1.png";
            }

            selectedFlag.src = event.target.src;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var desktopFlag = document.getElementById("selected-flag");
    var mobileflag = document.getElementById("selected-flag-res")
    var flagbtn = document.querySelector(".flag-btn")
    var flagbtnres = document.querySelector(".flag-btn-res")

    flagbtn.addEventListener('click', function (event) {
        if (desktopFlag.src !== mobileflag.src) {
            mobileflag.src = desktopFlag.src
        }
    })

    flagbtnres.addEventListener('click', function (event) {
        if (mobileflag.src !== desktopFlag.src) {
            desktopFlag.src = mobileflag.src
        }
    })
});
