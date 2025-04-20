import os
import requests
from urllib.parse import unquote

# Create images directory if it doesn't exist
os.makedirs('public/images/games', exist_ok=True)

# Game images to download with direct URLs from Imgur
game_images = {
    'catan.jpg': 'https://i.imgur.com/RB7OiMM.jpg',
    'ticket_to_ride.jpg': 'https://i.imgur.com/QE11CfD.jpg',
    'codenames.jpg': 'https://i.imgur.com/3QlF1Ig.jpg',
    'pandemic.jpg': 'https://i.imgur.com/LF4DTKX.jpg',
    'azul.jpg': 'https://i.imgur.com/YaV140M.jpg',
    'wingspan.jpg': 'https://i.imgur.com/O95UHKj.jpg',
    'seven_wonders.jpg': 'https://i.imgur.com/XWLYD3u.jpg',
    'splendor.jpg': 'https://i.imgur.com/YqTmEqb.jpg'
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def download_image(filename, url):
    try:
        response = requests.get(url, headers=headers, stream=True)
        response.raise_for_status()
        
        with open(f'public/images/games/{filename}', 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Successfully downloaded {filename}")
    except Exception as e:
        print(f"Error downloading {filename}: {str(e)}")

# Download all images
for filename, url in game_images.items():
    download_image(filename, url)

print("All downloads completed!") 