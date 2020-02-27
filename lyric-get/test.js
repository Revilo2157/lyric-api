lyrics = "\n          \n            \n            \nBlackbird singing in the dead of night\nTake these broken wings and learn to fly\nAll your life\nYou were only waiting for this moment to arise\n\n\nBlackbird singing in the dead of night\nTake these sunken eyes and learn to see\nAll your life\nYou were only waiting for this moment to be free\n\n\nBlackbird fly, blackbird fly\nInto the light of the dark black night\n\n\n\n\nBlackbird fly, blackbird fly\nInto the light of the dark black night\n\n\nBlackbird singing in the dead of night\nTake these broken wings and learn to fly\nAll your life\nYou were only waiting for this moment to arise\nYou were only waiting for this moment to arise\nYou were only waiting for this moment to arise\n\n\n            \n          \n        ";

				lyrics = lyrics.replace(/<[^>]*>/g, '');
				lyrics = lyrics.replace(/[\n]{2}/g, "\n");
				lyrics = lyrics.replace([/[\n]{3, }/g], "\n\n");
				lyrics = lyrics.replace(/^[ ?\n?]+|[ ?\n?]+$/g, "");
console.log(lyrics);