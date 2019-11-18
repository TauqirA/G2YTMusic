# G2YTMusic
Convert a Google Music Playlist to Youtube Music playlist without giving anyone access to your account. This is just a extension that can be loaded into chrome. (Download/Clone the repo, Go to chrome://extensions, turn on Developer Mode, Load Unpacked and select the folder where you downloaded the repo). Works as of 11/17/2019. Any small changes to YT Music or Google Music will break this.
This is not good code and was written in a couple of hours to transfer my playlists. No Guarantees. 

# HowTo:
1. Go to a Google Play Music Playlist
2. Open Chrome DevTools. (Ctrl+Shift+I)
3. In the console run startCollect(). Wait for it to start collecting
4. Scroll through the page. The console will show which songs where added
5. When at the end of the page it should print out "DONE:" then a string that has ~ separate songs. Copy this.
6. Go to Youtube Music.
7. Create a new playlist
8. Modify code outStr in main.js line 49 to use your playlist string
9. Go to https://music.youtube.com/search?q=start
10. Wait a few minutes. (100 songs ~ 30 min)
Note: It may add the wrong songs or not add a song at all but this doesn't happen often
