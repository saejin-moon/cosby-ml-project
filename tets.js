void async function main() {
    try {
    const res = await fetch("https://discord.com/api/v9/channels/1178441690927878145/messages?limit=50", {
    "headers": {
        "accept": "*/*",
        "authorization": "MTE1MjMxNzE2MTEzNDYyMDY5NA.GmEqkN.AlX63pacsZ7R3phGU9bQjEOoB7dzlRaOim_LbE",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-discord-locale": "en-US",
        "x-discord-timezone": "America/New_York",
        "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyMS4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8xMjEuMC4wLjAiLCJicm93c2VyX3ZlcnNpb24iOiIxMjEuMC4wLjAiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MjY1NjM3LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==",
        "cookie": "__dcfduid=060c2600caa811eea4b17dc7baeae76c; __sdcfduid=060c2601caa811eea4b17dc7baeae76c58aa553f7137b935e2095b62c4f6da51e06fe307f03884a1f2c7982187b13d9e; __cfruid=2ddb394c2077a02e8c4c172a2f069acf26e1ce45-1707853349; _cfuvid=XWAowYKaPO.RFZCVylsz8tQ3L4pBF9LblFlzNbT5NAs-1707853349989-0-604800000; cf_clearance=iq5zn5kZ0sAhwcAGTqcaoZ5waKzZHJ5vX0a5wbaa65s-1707853351-1-AQlLr1M0R97z1s2alvXAd7QBH3za7iKJh597YslmmtAFe2eTBb14EHSgvJ8a4/ywOvbA/stETV5KcejlWwIZrj8=",
    },
    "body": null,
    "method": "GET"
    });
    const obj = await res.json();
    console.log(obj);
    }
    catch(e){
        console.log(e);
    }
}()