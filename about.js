const user = {
            name: 'Aaron',
            imageUrl: 'images/mephoto.png',
            bio: 'Hello, my name is Aaron. I am currently pursuing my bachelors degree in Web Design and Development, and hope to gain knowledge and expand creative ability to better my career with fulfilling work. In my free time, I enjoy spending time with my friends and family who luckily live near by. My family and I enjoy getting to together to go on hikes and bike rides. We recently went on our yearly trip to Door County, WI and my niece got to ride on the trails for the first time connected to my bike. It was chaotic but a good time.'
        };

        // Create the h1 element
        const heading = React.createElement(
            'h1',
            null,
            user.name
        );

        // Create the image element
        const image = React.createElement(
            'img',
            {
                src: user.imageUrl,
                alt: user.name
            }
        );

        // Create the paragraph element
        const paragraph = React.createElement(
            'p',
            null,
            user.bio
        );

        // Render each element into its div
        ReactDOM.render(heading, document.getElementById('h1'));
        ReactDOM.render(image, document.getElementById('img'));
        ReactDOM.render(paragraph, document.getElementById('content'));
