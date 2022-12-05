from flask import Flask
from flask import render_template, g

def create_app():
    print('run: create_app()')
    app = Flask(__name__)

    """ ROUTES INIT """
    from kobert.routes.base_route import base_bp
    from kobert.routes.sing_route import sing_bp
    app.register_blueprint(base_bp)
    app.register_blueprint(sing_bp)

    """ ERROE PAGE """
    @app.errorhandler(404)
    def page_404(error):
        return render_template('/404.html'), 404

    return app