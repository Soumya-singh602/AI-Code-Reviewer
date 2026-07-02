from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .services.ai_reviewer import review_code


@api_view(["POST"])
def review(request):

    code = request.data.get("code")

    if not code:
        return Response(
            {
                "error": "Code is required"
            },
            status=400
        )

    result = review_code(code)

    return Response(
        {
            "result": result
        }
    )