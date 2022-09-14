import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [likedGames, setLikes] = useState([])
    const [profile, setProfile] = useState(null)
    const [likedIds, setId] = useState({})
    const [ratedGames, setRates] = useState([])
    const [ratedIds, setRateId] = useState({})
    const [reviewIds, setReviewId] = useState({})

    function setUpUser(user) {
        const newProfile = {}
        Object.keys(user).forEach(key => {
            if (!Array.isArray(user[key])) {
                newProfile[key] = user[key]
            }
        })
        setProfile(newProfile)
        setLikes(user.liked_games)
        const likedIdObj = {}
        user.liked_games.map(game => likedIdObj[game.id] = game.id)
        setId(likedIdObj)
        const rateIdObj = {}
        const ratedGamesArr = user.ratings.map(rating => {
            rateIdObj[rating.game_id] = {rating: rating.rating, id: rating.id}
            const ratedGameObj = {}
            Object.keys(rating.game).map(key => ratedGameObj[key] = key === 'rating' ? rating.rating : rating.game[key])
            return ratedGameObj
        })
        setRates(ratedGamesArr)
        setRateId(rateIdObj)
        const reviewIdObj = {}
        user.reviews.map(review => reviewIdObj[review.game_id] = review)
        setReviewId(reviewIdObj)
    }

    function signOut() {
        setProfile(null)
        setLikes([])
        setId({})
        setRates([])
        setRateId({})
        setReviewId({})
    }

    function getMe() {
        fetch("https://gamer-spot.up.railway.app/me")
        .then(res => {
            if (res.ok) {
                res.json().then(setUpUser)
            }
        })
    }
    const currentUser = {
        user: profile,
        setUser: setProfile,
        getMe,
        likedGames,
        setLikes,
        setId,
        likedIds,
        setUpUser,
        signOut,
        ratedGames,
        setRates,
        ratedIds,
        setRateId,
        reviewIds,
        setReviewId
    }

    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };