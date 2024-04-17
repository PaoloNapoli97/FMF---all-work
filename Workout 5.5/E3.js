// I dont quite understand how to pass the class to another class (not extends) on javascript.
// class SocialNetwork{

// }

class Post{
    constructor(UserObj, timestamp, likes){
        this.UserObj = UserObj; //I'm not sure about this, I did some searches and found this, seems to simple to me it feels wrong.
        this.timestamp = timestamp;
        this.likes = likes;
    }
}

class User{
    constructor(name, lastName, birthdate, profileImg){
        this.name = name;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.profileImg = profileImg;
    }
}

class TextPost extends Post {
    constructor(User, timestamp, likes, text){
        super(User, timestamp, likes);
        this.text = text;
    }
}

class ImagePost extends Post{
    constructor(User, timestamp, likes, image){
        super(User, timestamp, likes);
        this.image = image;
    }
}

class VideoPost extends Post{
    constructor(User, timestamp, likes, video){
        super(User, timestamp, likes);
        this.video = video;
    }
}