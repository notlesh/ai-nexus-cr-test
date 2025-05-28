import requests

def test_website_is_up():
    url = "http://localhost:8000"  # Assuming the website is served on localhost:8000
    try:
        response = requests.get(url)
        assert response.status_code == 200
    except requests.ConnectionError:
        assert False, "Website is not running or unreachable."


def test_website_content():
    url = "http://localhost:8000"
    response = requests.get(url)
    html_content = response.text
    assert "</html>" in html_content # very basic check if it contains html
