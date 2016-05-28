import datetime
import random
from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    help = 'Load dummy data for development purposes'

    def handle(self, *args, **options):
        """Handle dummydata command"""
        pass
