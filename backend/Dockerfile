FROM python:3.13-slim-bookworm
COPY --from=ghcr.io/astral-sh/uv:0.9.2 /uv /bin/uv

# Sync the project into a new environment, using the frozen lockfile
WORKDIR /app/backend
COPY . /app/backend
RUN uv sync --dev

# Run migrations
RUN uv run manage.py migrate

# Expose port
EXPOSE 8080

# Run the application
CMD ["uv", "run", "gunicorn", "--bind", "0.0.0.0:8080", "config.wsgi:application"]
