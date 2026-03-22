# properties/filters.py
import django_filters
from .models import Property

class PropertyFilter(django_filters.FilterSet):
    price_min = django_filters.NumberFilter(field_name="price", lookup_expr='gte')
    price_max = django_filters.NumberFilter(field_name="price", lookup_expr='lte')
    location = django_filters.CharFilter(field_name="location", lookup_expr='icontains')  # partial match

    class Meta:
        model = Property
        fields = ['location', 'price_min', 'price_max']