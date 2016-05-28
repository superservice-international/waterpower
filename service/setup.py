import os
from setuptools import find_packages, setup

with open(os.path.join(os.path.dirname(__file__), 'README.md')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='waterpower-service',
    version='0.1.0-alpha.1',
    packages=find_packages(),
    include_package_data=True,
    license='MIT',
    description='waterpower service',
    long_description=README,
    url='',
    author='creimers',
    author_email='christoph@superservice-international.com',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Operating System :: Linux',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
)
