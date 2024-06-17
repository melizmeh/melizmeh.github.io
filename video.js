<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scroll and Background Color Change</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            transition: background-color 0.5s ease;
            background-color: black; /* Initial background color */
            color: white;
            font-family: Arial, sans-serif;
        }
        .section {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
        }
        .red {
            background-color: red !important; /* Utilisation de !important pour s'assurer que le style est appliqué */
        }
        .center-container {
            text-align: center;
            margin-top: 20px;
        }
        .category-link {
            display: inline-block;
            margin: 10px;
            padding: 10px 20px;
            background-color: #333;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .category-link:hover {
            background-color: #555;
        }
    </style>
</head>
<body>

    <div id="center-container" class="center-container">
        <a href="./photography.html" class="category-link" id="link1">PHOTOGRAPHY.</a>
        <a href="./video.html" class="category-link" id="link2">VIDEOS.</a>
        <a href="./projects.html" class="category-link" id="link3">PROJECTS.</a>
        <a href="#" class="category-link" id="link4">ABOUT.</a>
    </div>

    <section id="home" class="section">
        <div>
            <h1>Home</h1>
        </div>
    </section>

    <section id="about" class="section red">
        <div>
            <h1>About</h1>
        </div>
    </section>

    <section id="portfolio" class="section">
        <div>
            <h1>Portfolio</h1>
        </div>
    </section>

    <section id="contact" class="section red">
        <div>
            <h1>Contact</h1>
        </div>
    </section>

    <footer id="footer" class="section">
        <div>
            <h1>Footer</h1>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            window.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('.section');
                let current = '';

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                        current = section.getAttribute('id');
                    }
                });

                document.body.className = '';
                document.body.classList.add(current);
            });
        });
    </script>

</body>
</html>
