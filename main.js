
var outStr = "id|name|duration|artist|album\n"
var addedSet = new Set()
function getContentOnPage(outStr,songCount) {
    var idx;
    for (idx = 2; idx < songCount+1; idx++) {
        var elemXpathStr = `/html/body/paper-drawer-panel/iron-selector/div[1]/paper-header-panel/div/div[1]/div[1]/div[3]/div[2]/div/table/tbody/tr[${idx}]`
        var elem = document.evaluate(elemXpathStr, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        if (elem == null){
            continue;
            elem = document.evaluate(elemXpathStr, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }
        var textArr = elem.innerText.split('\n');
        if(textArr[1] == null){
            continue;
        }
        if(!addedSet.has(textArr[0])){
            outStr+=`${textArr[0]}|${textArr[2]}|${textArr[3].trim()}|${textArr[4]}|${textArr[6]}\n`
            addedSet.add(textArr[0])
        }
    }
    console.log(outStr)
    console.log(addedSet.size)
    if (addedSet.size >= songCount){
      console.log(outStr)
      console.log("DONE:")
      console.log(outStr.replace(/\n/g,"~"))
    } else {
      setTimeout(function(){ collectPlaylist(outStr,songCount) },2000);
    }
    return outStr;
}

function collectPlaylist(outStr,songCount){
  outStr = getContentOnPage(outStr,songCount);
}
//
function startCollect(){
  var songCount = parseInt(document.evaluate('/html/body/paper-drawer-panel/iron-selector/div[1]/paper-header-panel/div/div[1]/div[1]/div[3]/div[1]/div/gpm-detail-page-header/div[2]/div[4]/span/span[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML.split(" ")[0]);
  setTimeout(function(){ collectPlaylist(outStr,songCount) },2000);
}
console.log(outStr)


var d = `id|name|duration|artist|album~1|Chasing Cars|4:27|Snow Patrol|Eyes Open~2|Breakeven|4:21|The Script|The Script~3|Flaming Hot Cheetos|2:03|Clairo|Flaming Hot Cheetos~4|Something|3:52|Julien Baker|Sprained Ankle~5|Funeral Pyre|4:38|Julien Baker|Funeral Pyre~6|hate u love u|2:55|Olivia O'Brien|hate u love u~7|Somebody Else|3:53|VÉRITÉ|Somebody Else~8|The Only Exception|4:27|Paramore|Brand New Eyes~9|Decode (Twilight Soundtrack Version)|4:22|Paramore|Twilight Original Motion Picture Soundtrack~10|Mr. Brightside|3:42|The Killers|Hot Fuss~11|Hurt Less|3:59|Julien Baker|Turn Out the Lights~12|Stare at Each Other & Fall in Love|3:48|Daniela Andrade|Stare at Each Other & Fall in Love~13|Emotions And Math|3:17|Margaret Glaspy|Emotions And Math~14|Fast Car|4:56|Tracy Chapman|Tracy Chapman~15|Bring Me To Life|3:55|Evanescence|Fallen~16|My Immortal|4:22|Evanescence|Fallen~17|Coming Home (Part II / Bonus Track)|2:44|Skylar Grey|Don't Look Down~18|Words|5:06|Skylar Grey|The Buried Sessions Of Skylar Grey~19|Sleep on the Floor|3:31|The Lumineers|Cleopatra (Deluxe)~20|Wake Me up When September Ends|4:45|Green Day|American Idiot~21|Better Off (Acoustic)|3:25|Handsome Ghost|Welcome Back: The Acoustic Recordings~22|Soft (Acoustic)|3:07|Handsome Ghost|Welcome Back: The Acoustic Recordings~23|Miss Atomic Bomb|4:54|The Killers|Direct Hits~24|Slow Burn|4:06|Kacey Musgraves|Golden Hour~25|Groceries|3:37|Mallrat|In the Sky~26|Heartburn|3:26|Wafia|Mind Medicine~27|Need You|3:18|Ember Island|Need You~28|talk is overrated (stripped.)|2:21|Jeremy Zucker|stripped.~29|Silhouette|3:50|Aquilo|Silhouette~30|Feels Like This|3:43|Maisie Peters|Dressed Too Nice For A Jacket~31|All I Want|5:05|Kodaline|In A Perfect World~32|the remedy for a broken heart (why am I so in love)|2:40|XXXTENTACION|?~33|Falling Slowly|4:26|Steve Kazee|Once: A New Musical (Original Broadway Cast Recording)~34|Let It Go|4:20|James Bay|Chaos And The Calm~35|Not About Angels|3:09|Birdy|Not About Angels~36|Skinny Love|3:58|Bon Iver|For Emma, Forever Ago~37|In the End|3:36|Linkin Park|Hybrid Theory~38|Numb|3:07|Linkin Park|Meteora~39|Here Without You|3:58|3 Doors Down|Away From The Sun~40|Fading Through (feat. Vancouver Sleep Clinic)|4:20|Wafia|XXIX~41|Sprained Ankle|2:22|Julien Baker|Sprained Ankle~42|Appointments|4:33|Julien Baker|Turn Out the Lights~43|Everybody Does|2:25|Julien Baker|Sprained Ankle~44|Fade Into You|4:55|Mazzy Star|So Tonight That I Might See~45|Motion Picture Soundtrack|3:20|Radiohead|Kid A~46|Youth|4:13|Daughter|If You Leave~47|I’ll Still Have Me|3:39|CYN|I’ll Still Have Me~48|Grow As We Go|4:09|Ben Platt|Grow As We Go~49|Lucid Dreams|3:59|Juice WRLD|Goodbye & Good Riddance~50|Only Us|3:47|Laura Dreyfuss|Dear Evan Hansen (Original Broadway Cast Recording)~51|Someone You Loved|3:02|Lewis Capaldi|Breach~52|Fade|4:04|Lewis Capaldi|Bloom - EP~53|She Used To Be Mine|4:10|Sara Bareilles|What's Inside: Songs from Waitress~54|SLOW DANCING IN THE DARK|3:29|Joji|BALLADS 1~55|1000x (feat. Broods)|4:01|Jarryd James|High~56|Breathe|3:57|Lauv|I met you when I was 18. (the playlist)~57|Landslide|3:19|Fleetwood Mac|Fleetwood Mac~58|Yesterday (Remastered 2009)|2:05|The Beatles|Help! (Remastered)~59|As U Wave|3:39|HalfNoise|The Velvet Face - EP~60|Slacks|3:26|St. South|New Moons, Vol. 2~61|Just Another Girl|4:22|The Killers|Direct Hits~62|Shot At The Night|4:02|The Killers|Direct Hits~63|Who You Are|3:42|Kurt Hugo Schneider|Who You Are~64|All I Wanna Say|3:50|Lontalius|I'll Forget 17~65|Drift|3:42|Benji Lewis|Home For Now~66|Early/late|4:25|bp valenzuela|The Neon Hour~67|Use Somebody|3:50|Kings Of Leon|Only By The Night~68|Instant Crush (feat. Julian Casablancas)|5:37|Daft Punk|Random Access Memories~69|The Other (Stripped)|3:02|Lauv|I met you when I was 18. (the extras)~70|Lost My Mind (Acoustic)|2:58|Alice Kristiansen|The Lost Sessions~71|EASE (Lontalius Remix) (feat. Broods)|3:48|Troye Sivan|Blue Neighbourhood (The Remixes)~72|Cherry Wine (Live)|3:59|Hozier|Wish I Was Here (Music From The Motion Picture)~73|Grow As We Go|4:09|Ben Platt|Sing To Me Instead~74|High Hopes|3:50|Kodaline|In A Perfect World~75|Mr. Sandman|3:26|SYML|Mr. Sandman~76|you were good to me|3:39|Jeremy Zucker|brent~77|please|3:39|Chelsea Cutler|brent~78|sometimes|4:36|Chelsea Cutler|brent~79|Yesterday (From The Album "One Man Only")|2:11|Himesh Patel|Yesterday (Original Motion Picture Soundtrack)~80|The Only|3:33|Sasha Sloan|Loser~81|Older|3:04|Sasha Sloan|Loser~82|Closer To You|3:04|Clairo|Immunity~83|The One That Got Away|4:08|Alice Kristiansen|Alice Kristiansen~84|Heartlines|3:17|Broods|Conscious~85|Release Me|3:32|Miette Hope|Release Me~86|Wasting My Young Years|3:24|London Grammar|If You Wait~87|Strong|4:25|London Grammar|If You Wait (Deluxe)~88|Nightcall|4:30|London Grammar|If You Wait~89|Interlude (Live)|4:04|London Grammar|If You Wait (Deluxe)~90|I Miss You|3:47|blink-182|blink-182~91|I Don't Think I Can Do This Again|3:42|Mura Masa|I Don’t Think I Can Do This Again~92|smiling when i die|3:26|Sasha Sloan|smiling when i die~93|start//end|5:34|EDEN|vertigo~94|come out and play|3:30|Billie Eilish|come out and play~95|Someone To Stay|4:14|Vancouver Sleep Clinic|Revival~96|Tongue Tied|3:46|Japanese Wallpaper|Glow~97|Miles to Your Heart (Acoustic Chill Mix)|2:24|Rock Mafia|Miles to Your Heart (Acoustic Chill Mix)~98|Give Me Something|3:11|Jarryd James|Jarryd James EP~99|Glow|5:28|Japanese Wallpaper|Glow~100|Souvenir|3:32|Julien Baker|boygenius~101|Thinkin Bout You|3:20|Frank Ocean|channel ORANGE~102|Paper Hearts|3:19|Tori Kelly|Foreword~103|Torn|4:04|Natalie Imbruglia|Left Of The Middle~104|Iris|4:49|The Goo Goo Dolls|Dizzy Up The Girl~105|Boulevard of Broken Dreams|4:22|Green Day|Greatest Hits: God's Favorite Band~106|forever//over|5:42|EDEN|vertigo~107|everything i wanted|4:05|Billie Eilish|everything i wanted~108|Something About You|3:23|Rudimental|Something About You~109|lovely|3:21|Billie Eilish|13 Reasons Why (Season 2)~110|So High|3:08|Ghost Loft|So High~111|I Don't Miss You at All|2:08|FINNEAS|Blood Harmony~`
//var p2019 = `id|name|duration|artist|album~1|God's Plan|3:19|Drake|Scorpion~2|start//end|5:34|EDEN|vertigo~3|Nandemonaiya - movie edit.|3:16|Radwimps|Your Name.~4|Drive|3:28|Hazers|Drive~5|Seeing Stars|3:09|BØRNS|Seeing Stars~6|Getting Over You|4:15|Lauv|I met you when I was 18. (the playlist)~7|Strangers|3:53|Sigrid|Strangers~8|Love Is Alive|2:50|Louis The Child|Love Is Alive EP~9|Super Far|3:23|LANY|LANY~10|The Middle|3:04|Zedd|The Middle~11|Good Girls|4:09|LANY|LANY~12|Pink Lemonade|4:12|James Bay|Electric Light~13|bellyache|2:59|Billie Eilish|dont smile at me~14|Day 1 ◑|3:53|HONNE|Day 1 ◑ / Sometimes ◐~15|4EVER|2:39|Clairo|4EVER~16|Sleep on the Floor|3:31|The Lumineers|Cleopatra (Deluxe)~17|Cleopatra|3:21|The Lumineers|Cleopatra (Deluxe)~18|Lost In Japan|3:21|Shawn Mendes|Shawn Mendes~19|Never Sleep Alone (feat. Tess Comrie)|3:44|Kaskade|Automatic~20|Mine|2:11|Bazzi|COSMIC~21|Non Believer|4:17|London Grammar|Truth Is a Beautiful Thing (Deluxe)~22|Metal & Dust|3:26|London Grammar|If You Wait~23|Tremble|3:19|Nicole Millar|Excuse Me (Deluxe)~24|New Light|3:36|John Mayer|New Light~25|Baby I'm Yours (feat. Irfane)|3:35|Breakbot|By Your Side~26|When We Were Young|4:50|Adele|25~27|Lonely Weekend|3:46|Kacey Musgraves|Golden Hour~28|Space Cowboy|3:36|Kacey Musgraves|Golden Hour~29|Your Shirt|3:50|Chelsea Cutler|Snow In October EP~30|talk is overrated (feat. blackbear)|3:09|Jeremy Zucker|idle~31|all the kids are depressed|2:50|Jeremy Zucker|glisten~32|better off (filous remix)|2:56|Jeremy Zucker|better off (filous Remix)~33|Nightcall|4:30|London Grammar|If You Wait (Deluxe)~34|Interlude (Live)|4:04|London Grammar|If You Wait (Deluxe)~35|Daydreaming|6:24|Radiohead|A Moon Shaped Pool~36|Coaster|3:19|Khalid|American Teen~37|Holocene|5:36|Bon Iver|Bon Iver~38|Last Hope|5:09|Paramore|Paramore~39|The Kill|3:51|Thirty Seconds To Mars|A Beautiful Lie~40|Iris|4:49|The Goo Goo Dolls|Dizzy Up The Girl~41|Young|5:24|Vallis Alps|Vallis Alps~42|Thru|4:13|Vallis Alps|Vallis Alps~43|East|4:35|Vallis Alps|Fable~44|Fading|4:40|Vallis Alps|Fading~45|Falling (pluko Remix)|4:23|Mansionair|Falling (pluko Remix)~46|Sway (Chainsmokers Remix)|3:00|Anna of the North|Sway (Chainsmokers Remix)~47|Day 1 ◑|3:53|HONNE|Love Me / Love Me Not~48|Warm on a Cold Night|4:21|HONNE|Warm On A Cold Night~49|Better Not|3:42|Louis The Child|Kids At Play- EP~50|Awake|4:43|Tycho|Awake~51|begin again|3:37|Purity Ring|another eternity~52|Heartlines|3:17|Broods|Conscious~53|OctaHate|3:24|Ryn Weaver|The Fool~54|Make Me Fade|4:06|K.Flay|Life as a Dog~55|Youth|3:50|Glass Animals|How To Be A Human Being~56|Coffee|4:29|Sylvan Esso|Sylvan Esso~57|Normal (stripped)|3:17|Sasha Sloan|Normal (stripped)~58|Do Right|3:15|Glades|Do Right~59|Girls Like You (feat. Cardi B)|3:55|Maroon 5|Red Pill Blues~60|Light On|3:53|Maggie Rogers|Heard It In A Past Life~61|Thick And Thin|3:32|LANY|Malibu Nights~62|Alibi|3:39|Mansionair|Shadowboxer~63|Human|3:20|Rag'n'Bone Man|Human (Deluxe)~64|Can’t Take A Joke|2:44|Drake|Scorpion~65|Moonlight|2:15|XXXTENTACION|?~66|Sunflower (Spider-Man: Into the Spider-Verse)|2:38|Post Malone, Swae Lee|Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)~67|Someone You Loved|3:02|Lewis Capaldi|Breach~68|Midnight City|4:01|M83|Hurry Up, We're Dreaming~69|You and Me|3:54|Shallou|You and Me~70|Find|3:39|Shallou, Kasbo, Cody Lovaas|Souls~71|Magic|4:15|Mr Jukes|God First~72|When Your Light Goes Out (feat. Lianne La Havas)|4:43|Mr Jukes|God First~73|gray|3:03|slenderbodies|sotto voce~74|anemone|3:48|slenderbodies|fabulist~75|Step|3:16|Crooked Colours|Step~76|Tremble|3:17|Nicole Millar|Tremble (EP)~77|Samurai (feat. Katy Tiz)|3:21|Vanic|Samurai~78|Like It's Over (feat. MNDR)|5:18|Jai Wolf|Kindred Spirits~79|Out Of My System|3:23|Youngr|Out Of My System~80|Pure Luck (feat. Freya Staer)|3:22|Ninajirachi|Pure Luck~81|1000x (feat. Broods)|4:01|Jarryd James|High~82|Goodbye|2:44|Melvv|Goodbye~83|Snow In October|3:19|Chelsea Cutler|Snow In October EP~84|Thursday|3:05|Lostboycrow|Thursday~85|Too Young (feat. Baker Grace)|3:23|ayokay|Too Young~86|Oh, What A World|4:01|Kacey Musgraves|Golden Hour~87|Happy & Sad|4:03|Kacey Musgraves|Golden Hour~88|Velvet Elvis|2:34|Kacey Musgraves|Golden Hour~89|Love Is A Wild Thing|4:16|Kacey Musgraves|Golden Hour~90|Gold|4:45|Chet Faker|Built On Glass~91|Weight in Gold|3:23|Gallant|Ology~92|EASE (Vallis Alps Remix) (feat. Broods)|3:25|Troye Sivan|Blue Neighbourhood (The Remixes)~93|Peach|4:15|Broods|Don't Feed The Pop Monster~94|Line of Sight|3:31|Elise Trouw|Line of Sight~95|Nevermind|2:36|Dennis Lloyd|Nevermind~96|3 Nights|2:57|Dominic Fike|Don't Forget About Me, Demos~97|What You Know|3:11|Two Door Cinema Club|Tourist History~98|Undercover Martyn|2:47|Two Door Cinema Club|Tourist History~99|Older|3:04|Sasha Sloan|Loser~100|Hey Now|3:27|London Grammar|If You Wait (Deluxe)~101|Metal & Dust|3:26|London Grammar|If You Wait (Deluxe)~102|Feels Like Summer|4:57|Childish Gambino|Summer Pack~103|Summertime Magic|3:33|Childish Gambino|Summer Pack~104|I Don't Think I Can Do This Again|3:42|Mura Masa|I Don’t Think I Can Do This Again~105|Needing / Getting|5:13|OK Go|Needing/Getting Bundle~106|She's Out Of Her Mind|2:42|blink-182|California~107|Bored To Death|3:55|blink-182|California~108|Missing Winter|3:44|Tep No|Missing Winter~109|NoLo|4:26|Grace Mitchell|Raceday~110|Only Love|2:51|Wafia|VIII~111|Black Sheep|4:57|Metric|Black Sheep~112|Hypnotic|2:56|Zella Day|Kicker~113|No Problem (feat. Lil Wayne & 2 Chainz)|5:04|Chance the Rapper|Coloring Book~114|Same Drugs|4:17|Chance the Rapper|Coloring Book~115|All The Stars|3:52|Kendrick Lamar|Black Panther The Album Music From And Inspired By~116|Ultralight Beam|5:20|Kanye West|The Life Of Pablo~117|Ready / Waiting|4:51|Japanese Wallpaper|Glow~118|Cocoon|3:32|Japanese Wallpaper|Glow~119|Float|4:36|Japanese Wallpaper|Glow~120|Wearing You Out|3:52|Japanese Wallpaper|Glow~121|Tell Me What You Mean by That|3:00|Japanese Wallpaper|Glow~122|Glow|5:28|Japanese Wallpaper|Glow~123|Your Time (feat. KAYTRANADA)|4:04|Nick Murphy|Missing Link~124|Sanity|3:34|Nick Murphy / Chet Faker|Run Fast Sleep Naked~125|Silk|3:12|Giselle|Silk~126|Accordion|1:58|Madvillain|Madvillainy~127|Down On My Luck|3:29|Vic Mensa|Down On My Luck~128|Oceans|3:19|Vallis Alps|Oceans~129|come out and play|3:30|Billie Eilish|come out and play~130|everything i wanted|4:05|Billie Eilish|everything i wanted~131|Butterflies|3:39|Kacey Musgraves|Golden Hour~132|Dazed & Confused|3:11|Ruel|Ready~`
//var ret = outStr.replace(/\n/g,"~")

var outStr = d;
function addSong(){
  var elemXpathStr = '/html/body/ytmusic-app/ytmusic-app-layout/div[3]/ytmusic-search-page/ytmusic-section-list-renderer/div[2]/ytmusic-shelf-renderer[1]/div[1]/ytmusic-responsive-list-item-renderer/ytmusic-menu-renderer/paper-icon-button'
  var elem = document.evaluate(elemXpathStr, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  elem.click()
  setTimeout(function(){
    var addPlaylistStr = '/html/body/ytmusic-app/ytmusic-popup-container/iron-dropdown/div/ytmusic-menu-popup-renderer/paper-listbox/ytmusic-menu-navigation-item-renderer[2]/a'
    var elem2 = document.evaluate(addPlaylistStr, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    elem2.click()
    },2000);
  setTimeout(function(){
    var playlistStr = '/html/body/ytmusic-app/ytmusic-popup-container/iron-dropdown[2]/div/ytmusic-add-to-playlist-renderer/div[1]/ytmusic-playlist-add-to-option-renderer[1]/button'
    var elem3 = document.evaluate(playlistStr, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    elem3.click()
  },5000);
}

function startAdd(){
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('q');
  if (myParam == "start"){
    localStorage.count = -1;
  } else if (myParam == "stop"){
    localStorage.count = undefined;
  } else {
    addSong();
  }
  
  if (localStorage.count == -1){
    localStorage.count = 1;
  }
  if (localStorage.count == undefined){
    return;
  }
  setTimeout(function(){
  var songList = outStr.split("~")
  var song = songList[Number(localStorage.count)].split("|")
  localStorage.count = Number(localStorage.count) + 1;
  url = "https://music.youtube.com/search?q="+encodeURI(song[1]+"  "+song[3]);
  window.location.replace(url);
  }, 10000);
}
setTimeout(function(){ startAdd() },5000);
