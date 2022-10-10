from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in edoor_frontdesk/__init__.py
from edoor_frontdesk import __version__ as version

setup(
	name="edoor_frontdesk",
	version=version,
	description="ESTC Hotel Management System",
	author="Tes Pheakdey",
	author_email="pheakdey.micronet@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
