/* =========================================
   PAGE 2
========================================= */

function goPage3() {

    window.location.href = "page3.html";

}


/* =========================================
   PAGE 3
========================================= */

function goPage2() {

    window.location.href = "page2.html";

}


/* =========================================
   SCROLL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (revealElements.length > 0) {

    const observer =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        function(element) {

            observer.observe(element);

        }
    );

}