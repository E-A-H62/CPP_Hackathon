import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantRecommender = () => {
    const [location, setLocation] = useState('');
    const [cuisine, setCuisine] = useState('');
    const navigate = useNavigate();

    // https://medium.com/@bobjunior542/using-usenavigate-in-react-router-6-a-complete-guide-46f51403f430
    const handleSubmit = (event) => {
        event.preventDefault();
        // Can handle form submission here
        // For example, send data to backend or perform any logic
        console.log('Location:', location);
        console.log('Cuisine:', cuisine);
        //navigate('/restaurant');
        navigate('/restaurant', { state: { location, cuisine } });
    };

    // https://medium.com/@alexandr.fework/curl-is-a-command-line-tool-used-for-making-http-requests-e2ab67aa4672
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/restaurants?tags=Chicken,Korean')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container">
            <h1>Welcome to our Restaurant Recommender</h1>
            <pre>{JSON.stringify(data)}</pre>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="location">Around what zipcode do you want to find restaurants?</label>
                    <input
                        type="number"
                        className="form-control"
                        id="location"
                        name="location"
                        min="0"
                        max="99999999"
                        step="1"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cuisine">What type of cuisine sounds good?</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cuisine"
                        name="cuisine"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default RestaurantRecommender;
