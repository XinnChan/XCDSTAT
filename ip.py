import requests

def get_vps_ip():
    url = 'https://ipinfo.io/json'
    response = requests.get(url)
    data = response.json()
    return data.get('ip')

if __name__ == "__main__":
    vps_ip = get_vps_ip()
    print("IP VPS Anda adalah:", vps_ip)