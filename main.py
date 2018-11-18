import webapp2
import jinja2
import os

jinja_environment = jinja2.Environment(
    loader = jinja2.FileSystemLoader(
os.path.dirname(__file__) + '/templates'))

class MainPage(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('index.html')
        variables = {}
        self.response.write(template.render(variables))

class About(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('about.html')
        variables = {}
        self.response.write(template.render(variables))

class Charities(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('charities.html')
        self.response.write(template.render())

class Timer(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('timer.html')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/about', About),
    ('/charities', Charities),
    ('/timer', Timer),
], debug=True)
