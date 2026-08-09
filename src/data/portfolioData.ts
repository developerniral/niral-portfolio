import {
  ExpertiseCategory,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  AchievementItem,
  ContactInfo
} from '../types';

export const HERO_DATA = {
  name: "Niral Shakya",
  title: "Senior PHP / Fullstack Developer",
  subtitle: "Building scalable enterprise applications, RESTful APIs and high-performance backend systems in PHP for over 10 years across Japanese enterprise and US freelance clients.",
  statusText: "Available for Senior Developer",
  experienceYears: "10+",
  location: "Butwal, Nepal",
  socialLinks: [
    { label: "LinkedIn", url: "https://linkedin.com/in/niral-shakya", icon: "Linkedin" },
    { label: "GitHub", url: "https://github.com/niralshakya", icon: "Github" },
    { label: "Portfolio", url: "https://niralshakya.com.np", icon: "Globe" },
    { label: "Email", url: "mailto:shakya.niral@gmail.com", icon: "Mail", isEmail: true }
  ]
};

export const ABOUT_DATA = {
  summary: "Senior PHP Developer with 10+ years of experience designing and developing enterprise applications, scalable RESTful APIs, and backend systems for Japanese clients at Miracle Interface, alongside delivering custom WordPress and web applications for US clients as freelancer",
  specializations: [
    "Core PHP",
    "Laravel",
    "REST APIs",       
    "MySQL & PostgreSQL",
    "System Architecture",
    "Database Design",
    "Performance Optimization",
  ],
  sdlcNote: "Experienced throughout the Software Development Life Cycle, from requirements gathering to deployment and maintenance.",
  highlights: [
    {
      title: "Enterprise Systems Architecture",
      desc: "Designed scalable, modular backend structures adhering to SOLID principles & Repository patterns."
    },
    {
      title: "Professional Developer",
      desc: "Technical collaboration with project manager, engineering teams in Nepal and Japan"
    },
    {
      title: "Freelance Developer",
      desc: "Direct collaborate with US business clients.",
    },
    {
      title: "Payment Integration",
      desc: "Expertise in complex payment pipelines (Stripe, GMO, Kuroneko)"
    },
  ]
};

export const CORE_EXPERTISE: ExpertiseCategory[] = [
  {
    title: "Backend Development",
    iconName: "Server",
    description: "Robust, high-throughput server architecture and payment gateway integration.",
    skills: ["Core PHP", "Laravel", "REST API", "Authentication", "Payment Integration"]
  },
  {
    title: "Database",
    iconName: "Database",
    description: "High-performance data layer design, index tuning, and query optimization.",
    skills: ["MySQL", "PostgreSQL", "Schema Design", "Query Optimization"]
  },
  {
    title: "Architecture",
    iconName: "Cpu",
    description: "Maintainable enterprise codebases structured for longevity and scalability.",
    skills: ["SOLID", "Design Patterns", "MVC", "Repository Pattern", "Microservices"]
  },
  {
    title: "Cloud & Services",
    iconName: "Cloud",
    description: "Cloud-native backend deployments and real-time event distribution.",
    skills: ["Google Cloud Platform", "Firebase", "FCM", "Cloud Functions"]
  },
  {
    title: "Frontend & Frameworks",
    iconName: "Layout",
    description: "Full-stack web application development and administrative portals.",
    skills: ["Angular", "JavaScript", "React", "Bootstrap"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Senior Programmer",
    company: "Miracle Interface Pvt. Ltd.",
    period: "2014 — Present",
    location: "Nepal",
    highlights: [
      "Designed and developed enterprise CRM, CMS and eCommerce system using Core PHP, Laravel, and Angular.",
      "Designed and implemented scalable RESTful APIs for web and mobile applications.",
      "Designed modular backend architectures using Laravel and Yii, applying MVC, SOLID principles, service-layer patterns, and reusable components to improve maintainability and scalability",
      "Integrated Stripe, Firebase, FCM, and major Japanese payment gateways (GMO, Kuroneko Payment).",
      "Optimized MySQL and PostgreSQL databases through query tuning, indexing, and applying transaction",
      "Participated in system design, database schema planning, and application architecture discussions.",
      "Mentored intern developers through code reviews, debugging assistance, resolving technical challenges and supporting feature implementation.",      
    ],
    techStack: ["PHP", "Laravel", "Yii", "MySQL", "PostgreSQL", "REST APIs", "Firebase", "Angular", "React", "Docker"]
  },
  {
    role: "Freelance Developer",
    company: "Independent Freelance",
    period: "2024 - Present",
    location: "Local Project and Remote US Clients",
    highlights: [
      "Designed and developed custom WordPress themes and booking plugins, also integrated various plugins like multilanguage",
      "Provided end-to-end server migrations, database tuning, and ongoing technical maintenance.",
      "Maintained direct client communication, scoping technical requirements, and delivering projects on schedule."
    ],
    techStack: ["PHP", "WordPress", "React", "MySQL", "JavaScript", "HTML5/CSS3", "REST APIs"]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "ecommerce-platform",
    title: "Enterprise eCommerce Platform",
    tags: ["Laravel", "Yii", "PostgreSQL", "Japanese Gateways"],
    category: "eCommerce",
    imageUrl: "/assets/projects/ecommerce-main.jpg",
    description: "Enterprise eCommerce platform featuring inventory management, subscriptions, coupons, reward points, commissions, and Japanese payment gateway integration.",
    subProjects: [
      {
        id: "sub-1",
        name: "Japanese Multi-Vendor B2B & B2C Marketplace",
        imageUrl: "/assets/projects/sub-japanese-marketplace.jpg",
        description: "B2B and B2C storefront featuring bulk quantity discounting, inventory sync across regional fulfillment hubs, and GMO / Kuroneko payment gateways.",
        tags: ["Laravel", "MySQL", "GMO Gateway", "B2B / B2C"]
      },
      {
        id: "sub-2",
        name: "Subscription & Recurring Membership Portal",
        imageUrl: "/assets/projects/sub-subscription-portal.jpg",
        description: "Automated recurring order billing system with flexible delivery schedules, member reward tiers, and automated failed-payment recovery workflows.",
        tags: ["Laravel", "Stripe", "Subscriptions", "Redis"]
      },
      {
        id: "sub-3",
        name: "High-Volume Flash Sale & Coupon Storefront",
        imageUrl: "/assets/projects/sub-flash-sale.jpg",
        description: "Optimized storefront engineered for peak flash sale traffic events with real-time stock allocation and fast gateway checkout.",
        tags: ["Yii", "PostgreSQL", "Caching", "Coupons"]
      },
      {
        id: "sub-4",
        name: "Affiliate & Multi-Tier Commission Engine",
        imageUrl: "/assets/projects/sub-affiliate-engine.jpg",
        description: "Comprehensive partner portal for tracking affiliate referral sales, calculating dynamic commission tiers, and managing payout processing.",
        tags: ["Laravel", "REST APIs", "Affiliates", "Analytics"]
      }
    ],
    longDescription: "A comprehensive multi-tenant eCommerce engine engineered for high-volume transactions and complex pricing rules. Features integrated inventory tracking across warehouses, automated recurring subscription billing, tiered reward point distribution, and custom commission structures.",
    keyFeatures: [
      "Multi-tier subscription billing engine with automated retry workflows",
      "Payment gateway integrations (GMO, Kuroneko Payment, Stripe)",
      "Coupons & timesale discount logic as offer system",
      "High-throughput MySQL query optimization for peak sales events"
    ],
    architectureDetails: "Built on a modular Laravel framework using the Repository-Service pattern to decouple business logic from controllers. Includes background queue processing via Redis for order receipts and notification dispatch.",
    codeSnippet: {
      language: "php",
      filename: "app/Services/Payment/JapaneseGatewayService.php",
      code: `<?php

namespace App\\Services\\Payment;

use App\\Contracts\\PaymentGatewayInterface;
use App\\Exceptions\\PaymentFailedException;
use Illuminate\\Support\\Facades\\Http;

class JapaneseGatewayService implements PaymentGatewayInterface
{
    public function __construct(
        private string $merchantId,
        private string $apiKey,
        private string $endpointUrl
    ) {}

    public function processTransaction(array $payload): array
    {
        $response = Http::withHeaders([
            'X-Merchant-ID' => $this->merchantId,
            'Content-Type'  => 'application/json; charset=UTF-8'
        ])->post($this->endpointUrl . '/settle', [
            'amount' => $payload['amount'],
            'currency' => 'JPY',
            'token' => $payload['card_token'],
            'security_code' => $payload['cvv'] ?? null
        ]);

        if (!$response->successful() || $response['result'] !== '0000') {
            throw new PaymentFailedException($response['error_message'] ?? 'Payment processing failed');
        }

        return [
            'transaction_id' => $response['transaction_id'],
            'status' => 'ok',
            'raw_response' => $response->json()
        ];
    }
}`
    }
  },
  {
    id: "vehicle-reservation",
    title: "Vehicle Reservation System",
    tags: ["Laravel", "Angular", "Firebase", "FCM"],
    category: "Reservations",
    imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    description: "Reservation management platform with REST APIs, scheduling, booking management, and mobile push notifications.",
    longDescription: "An end-to-end fleet and vehicle booking platform enabling real-time slot scheduling, driver assignment, vehicle availability tracking, and automated mobile alerts.",
    keyFeatures: [
      "Real-time reservation availability engine with collision prevention",
      "Firebase Cloud Messaging (FCM) push notifications for booking alerts",
      "RESTful API suite consumed by Angular Web & Mobile Native apps",
      "Automated PDF invoice generation and email dispatch"
    ],
    architectureDetails: "Utilizes Laravel API resources with JWT / Sanction authentication. Firebase Firestore synchronization handles live driver assignment status updates.",
    codeSnippet: {
      language: "php",
      filename: "app/Http/Controllers/Api/ReservationController.php",
      code: `<?php

namespace App\\Http\\Controllers\\Api;

use App\\Http\\Requests\\CreateBookingRequest;
use App\\Services\\ReservationService;
use App\\Http\\Resources\\ReservationResource;
use Illuminate\\Http\\JsonResponse;

class ReservationController extends Controller
{
    public function store(CreateBookingRequest $request, ReservationService $service): JsonResponse
    {
        $reservation = $service->createReservation(
            userId: $request->user()->id,
            vehicleId: $request->validated('vehicle_id'),
            startDate: $request->validated('start_date'),
            endDate: $request->validated('end_date')
        );

        return response()->json([
            'message' => 'Vehicle booked successfully',
            'data'    => new ReservationResource($reservation)
        ], 201);
    }
}`
    }
  },
  {
    id: "resource-management",
    title: "Resource Management System",
    tags: ["Laravel","Yii", "Angular", "PostgreSQL","FCM"],
    category: "Resource Mgmt",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description: "Enterprise workforce management system with RBAC, reporting, dashboards, and export functionality.",
    longDescription: "A workforce management suite designed for tracking project allocation, employee billable hours, role-based access control, and executive reporting.",
    keyFeatures: [
      "Granular Role-Based Access Control (RBAC) down to field level",
      "Interactive analytics dashboard with Angular charts & CSV/Excel/PDF export",
      "Workforce utilization tracking with multi-currency cost calculations",
      "Audit logging for enterprise compliance"
    ],
    architectureDetails: "Architected using the Yii framework back-end serving optimized REST endpoints to an Angular single-page frontend with cached DB aggregations.",
    codeSnippet: {
      language: "php",
      filename: "components/RbacManager.php",
      code: `<?php

namespace app\\components;

use yii\\base\\Component;
use yii\\rbac\\DbManager;

class RbacManager extends Component
{
    public function checkPermission($userId, $permissionName, $params = [])
    {
        $auth = \\Yii::$app->authManager;
        return $auth->checkAccess($userId, $permissionName, $params);
    }
}`
    }
  },
  {
    id: "iot-monitoring",
    title: "IoT Monitoring Platform",
    tags: ["Laravel", "Firebase", "Angular", "Real-time", "IoT"],
    category: "IoT",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: "Industrial monitoring platform with real-time dashboards and cloud-connected IoT devices.",
    longDescription: "An industrial IoT platform collecting telemetry data from physical sensor nodes, visualizing environmental parameters in real-time, and firing automated safety alerts.",
    keyFeatures: [
      "Real-time sensor telemetry ingestion and state persistence",
      "Interactive analytics dashboard with Angular charts & CSV/Excel/PDF export",
      "Live updating web dashboard powered by Firebase Realtime DB",
      "Threshold alert engine with automated email & FCM based mobile notification",
      "Historical data archiving and trend analysis graphs"
    ],
    architectureDetails: "Laravel background workers ingest incoming MQTT/HTTP payloads, persist time-series logs in PostgreSQL, and stream current status to Firebase for zero-latency client updates.",
    codeSnippet: {
      language: "php",
      filename: "app/Jobs/ProcessTelemetryData.php",
      code: `<?php

namespace App\\Jobs;

use App\\Models\\DeviceTelemetry;
use App\\Services\\FirebaseSyncService;
use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;

class ProcessTelemetryData implements ShouldQueue
{
    use Queueable;

    public function __construct(
        public string $deviceId,
        public array $sensorMetrics
    ) {}

    public function handle(FirebaseSyncService $firebase): void
    {
        DeviceTelemetry::create([
            'device_id' => $this->deviceId,
            'temperature' => $this->sensorMetrics['temp'] ?? null,
            'humidity' => $this->sensorMetrics['humidity'] ?? null,
            'recorded_at' => now(),
        ]);

        $firebase->updateDeviceNode($this->deviceId, $this->sensorMetrics);
    }
}`
    }
  },
  {
    id: "butwal-cricket",
    title: "Butwal Cricket Platform",
    tags: ["Laravel", "MySQL", "Community", "Sports"],
    category: "Community",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",
    description: "Community cricket platform featuring tournaments, teams, players, fixtures, events, and news management.",
    longDescription: "A dedicated regional sports platform empowering cricket leagues, local teams, and fans with live tournament scorecards, player statistics, match schedules, and media publishing.",
    keyFeatures: [
      "Tournament lifecycle & group/knockout match fixture generators",
      "Player stats calculation engine (batting averages, bowling economy, strike rates)",
      "Live ball-by-ball score updating interface",
      "News, event announcements, and gallery management"
    ],
    architectureDetails: "Clean Laravel application leveraging Eloquent ORM relationships with full page caching and media management for high fan engagement during major tournaments.",
    codeSnippet: {
      language: "php",
      filename: "app/Models/Player.php",
      code: `<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;

class Player extends Model
{
    protected $fillable = ['name', 'role', 'batting_style', 'bowling_style', 'bio'];

    public function matchPerformances(): HasMany
    {
        return $this->hasMany(MatchPerformance::class);
    }

    public function getBattingAverageAttribute(): float
    {
        $totalRuns = $this->matchPerformances()->sum('runs');
        $outs = $this->matchPerformances()->where('is_out', true)->count();
        return $outs > 0 ? round($totalRuns / $outs, 2) : $totalRuns;
    }
}`
    }
  },
  {
    id: "us-wordpress-platform",
    title: "Custom WordPress",
    tags: ["WordPress", "PHP"],
    category: "CMS",
    imageUrl: "/assets/projects/wordpress-main.jpg",
    description: "Custom WordPress theme and plugin solution engineered for US business clients with tailored custom post types, API integrations.",
    subProjects: [
      {
        id: "us-sub-1",
        name: "Uranz Hair Studio & Spa",
        imageUrl: "/assets/projects/sub-woo-booking.jpg",
        description: "Custom WordPress theme as per business vibe and custom plugin to handle booking service.",
        tags: ["WordPress"]
      },
      {
        id: "us-sub-2",
        name: "Liveboard",
        imageUrl: "/assets/projects/liveboard.jpg",
        description: "Custom WordPress theme as per business vibe and custom plugin to handle booking service.",
        tags: ["WordPress", "PHP", "Multilanguage"]
      }
    ],
    longDescription: "Bespoke WordPress & WooCommerce platform built for US clients requiring tailored business workflows. Features lightweight custom theme architecture (no heavy visual builders), custom plugin development for specialized business logic, Stripe payment gateway integrations, and speed optimizations.",
    keyFeatures: [
      "Custom PHP plugin development for automated client workflows and data processing",
      "Tailored WooCommerce checkout & payment gateway hooks (Stripe, PayPal, Authorize.Net)",
      "Page speed optimization achieving 90+ Google Core Web Vitals performance scores",
      "Custom REST API integrations connecting WordPress with third-party CRM platforms"
    ],
    architectureDetails: "Architected following official WordPress PHP coding standards. Uses object-oriented plugin architecture, custom REST API endpoints (/wp-json/v2/), transient caching for complex queries, and secure AJAX handlers.",
    codeSnippet: {
      language: "php",
      filename: "wp-content/plugins/custom-business-core/includes/class-payment-handler.php",
      code: `<?php

namespace CustomBusinessCore\\Includes;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PaymentHandler
{
    public function __construct()
    {
        add_action('wp_ajax_process_custom_checkout', [$this, 'handle_checkout']);
        add_action('wp_ajax_nopriv_process_custom_checkout', [$this, 'handle_checkout']);
    }

    public function handle_checkout(): void
    {
        check_ajax_referer('custom_checkout_nonce', 'security');

        $email   = sanitize_email($_POST['email'] ?? '');
        $amount  = floatval($_POST['amount'] ?? 0);
        $token   = sanitize_text_field($_POST['stripe_token'] ?? '');

        if (empty($email) || $amount <= 0 || empty($token)) {
            wp_send_json_error(['message' => 'Invalid payment parameters.'], 400);
        }

        // Custom transaction processing via Stripe API or gateway SDK
        $response = $this->process_stripe_charge($token, $amount, $email);

        if ($response['success']) {
            wp_send_json_success([
                'message' => 'Payment processed successfully.',
                'transaction_id' => $response['txn_id']
            ]);
        } else {
            wp_send_json_error(['message' => $response['error']], 400);
        }
    }
}`
    }
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Backend & API Engineering",
    iconName: "Server",
    description: "Robust, high-throughput server architecture, RESTful API endpoints, and payment gateway integrations.",
    skills: ["Core PHP (7.x / 8.x)", "Laravel Framework", "Yii Framework", "RESTful APIs", "Payment Gateways (Stripe, GMO, Kuroneko)", "Authentication & Security"],
    detailedSkills: [
      {
        name: "Core PHP (7.x / 8.x)",
        level: "Expert / Master",
        years: "10+ Years",
        isPrimary: true,
        description: "Deep expertise in modern Object-Oriented PHP 8.x, strict type hinting, custom plugin development, and optimized backend processing.",
        projects: ["Enterprise eCommerce Platform", "US Custom WordPress Engine", "Vehicle Reservation System"],
        highlights: [
          "10+ years writing high-volume production PHP logic",
          "Custom WordPress plugin development and AJAX checkout endpoints",
          "Decoupled Service-Repository backend architecture"
        ]
      },
      {
        name: "Laravel Framework",
        level: "Expert",
        years: "8+ Years",
        isPrimary: true,
        description: "Enterprise Laravel development utilizing Eloquent ORM, Service-Repository pattern and RESTful API endpoints.",
        projects: ["Enterprise eCommerce Platform", "IoT Monitoring Platform", "Butwal Cricket Platform"],
        highlights: [
          "Built modular multi-tenant backend engines",
          "Redis queue workers for high-concurrency order processing",
          "Custom middleware & OAuth / JWT authentication"
        ]
      },
      {
        name: "Yii Framework",
        level: "Advanced",
        years: "6+ Years",
        isPrimary: false,
        description: "High-performance Yii 1.x / 2.x enterprise web application development with Active Record optimization and role-based access control.",
        projects: ["Resource Management System", "Enterprise eCommerce Platform"],
        highlights: [
          "Optimized relational query builders for large datasets",
          "Role-Based Access Control (RBAC) implementations"
        ]
      },
      {
        name: "RESTful API Architecture",
        level: "Expert",
        years: "10+ Years",
        isPrimary: true,
        description: "Designing, documenting, and implementing secure JSON REST APIs powering web applications and mobile apps.",
        projects: ["Enterprise eCommerce Platform", "IoT Monitoring Platform", "Vehicle Reservation System"],
        highlights: [
          "Standardized request/response formats & error handling",
          "API rate limiting, CORS configuration, and Swagger/OpenAPI docs",
          "FCM push notification integration"
        ]
      },
      {
        name: "Payment Gateway Integration",
        level: "Expert",
        years: "8+ Years",
        isPrimary: true,
        description: "Integrating Japanese enterprise payment gateways (GMO Payment Gateway, Kuroneko Payment) alongside Stripe API.",
        projects: ["Enterprise eCommerce Platform", "US WooCommerce Storefronts"],
        highlights: [
          "Credit card tokenization & 2-phase settlement workflows",
          "Webhook event processing & automated failed-payment retry logic",
          "PCI-DSS compliant transaction security"
        ]
      }
    ]
  },
  {
    category: "Database & Caching",
    iconName: "Database",
    description: "High-performance data layer design, index tuning, transaction safety",
    skills: ["MySQL", "PostgreSQL", "Firestore", "Database Design", "Query Optimization"],
    detailedSkills: [
      {
        name: "MySQL",
        level: "Expert",
        years: "10+ Years",
        isPrimary: true,
        description: "Relational schema architecture, composite index design, EXPLAIN plan execution analysis, and ACID transaction safety.",
        projects: ["Enterprise eCommerce Platform", "Vehicle Reservation System"],
        highlights: [
          "Optimized slow queries reducing execution latency dramatically",
          "Designed multi-tenant normalized relational schemas",
          "Stored procedures, triggers, and foreign key constraints"
        ]
      },
      {
        name: "PostgreSQL",
        level: "Advanced",
        years: "6+ Years",
        isPrimary: true,
        description: "Advanced relational database features, JSONB columns, complex CTE queries, and time-series data indexing.",
        projects: ["Resource Management System", "IoT Monitoring Platform"],
        highlights: [
          "Optimized analytical reporting queries for workforce metrics",
          "Time-series sensor telemetry data logging"
        ]
      },
      {
        name: "Redis Cache",
        level: "Proficient",
        years: "5+ Years",
        isPrimary: false,
        description: "In-memory key-value caching, session storage, rate limiting counters, and queue buffering.",
        projects: ["Enterprise eCommerce Platform", "IoT Monitoring Platform"],
        highlights: [
          "Sub-millisecond query cache retrieval for frequent catalog requests",
          "Queue driver for background mailers and push notifications"
        ]
      },
      {
        name: "Firestore",
        level: "Proficient",
        years: "4+ Years",
        isPrimary: false,
        description: "NoSQL document store design with real-time listeners for instant synchronization across clients.",
        projects: ["IoT Monitoring Platform", "Butwal Cricket Platform"],
        highlights: [
          "Live telemetry state updates and score feed streaming"
        ]
      }
    ]
  },
  {
    category: "Frameworks & Frontend",
    iconName: "Layers",
    description: "Full-stack web application development, API integration, interactive dashboards, and responsive UIs.",
    skills: ["Laravel", "WordPress", "Angular", "React", "JavaScript (ES6+)", "Node.js", "Bootstrap"],
    detailedSkills: [
      {
        name: "WordPress",
        level: "Expert",
        years: "8+ Years",
        isPrimary: true,
        description: "Bespoke PHP theme & plugin development without bloated page builders, custom post types, hooks/filters, WPML multilanguage support.",
        projects: ["US Client Custom WordPress Engine", "WooCommerce Booking Storefront"],
        highlights: [
          "Custom PHP plugin development for specialized business logic",
          "Speed optimization and security hardening"
        ]
      },
      {
        name: "Angular",
        level: "Advanced",
        years: "5+ Years",
        isPrimary: false,
        description: "Building responsive single-page administrative dashboards with TypeScript, RxJS observables, and components.",
        projects: ["Resource Management System", "IoT Monitoring Platform"],
        highlights: [
          "Enterprise reporting dashboards with charts & data table exports",
          "Role-based routing guards & reactive form validation"
        ]
      },
      {
        name: "React & TypeScript",
        level: "Proficient",
        years: "4+ Years",
        isPrimary: false,
        description: "Modern component-based UI development with React Hooks, Tailwind CSS, TypeScript interfaces, and Vite.",
        projects: ["Personal Portfolio", "Interactive Dashboards"],
        highlights: [
          "Clean component modularity and responsive layout design"
        ]
      },
      {
        name: "Node.js",
        level: "Proficient",
        years: "4+ Years",
        isPrimary: false,
        description: "Server-side JavaScript runtime for lightweight microservices, build tools, and asynchronous task execution.",
        projects: ["API Gateways & Build Tooling"],
        highlights: [
          "npm package automation and express micro-routes"
        ]
      }
    ]
  },
  {
    category: "Architecture & System Design",
    iconName: "Cpu",
    description: "Maintainable enterprise codebases structured for longevity, clean architecture, and decoupled design patterns.",
    skills: ["SOLID Principles", "Repository Pattern", "Service-Repository Architecture", "Design Patterns", "MVC Architecture"],
    detailedSkills: [
      {
        name: "Service-Repository Pattern",
        level: "Expert",
        years: "8+ Years",
        isPrimary: true,
        description: "Decoupling business rules from controllers and persistence layers to ensure high testability and maintainability.",
        projects: ["Enterprise eCommerce Platform", "Vehicle Reservation System"],
        highlights: [
          "Strict separation of concerns across enterprise modules",
          "Interchangeable data sources via repository interfaces"
        ]
      },
      {
        name: "SOLID Principles",
        level: "Expert",
        years: "10+ Years",
        isPrimary: true,
        description: "Applying Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion across backend codebases.",
        projects: ["All Enterprise Projects"],
        highlights: [
          "Modular architecture engineered for long-term scalability"
        ]
      }
    ]
  },
  {
    category: "Cloud & Real-Time Services",
    iconName: "Cloud",
    description: "Cloud infrastructure, Firebase real-time persistence, and push notification distribution.",
    skills: ["Google Cloud Platform (GCP)", "Firebase", "FCM Push Notifications", "Cloud Functions"],
    detailedSkills: [
      {
        name: "Firebase & FCM",
        level: "Advanced",
        years: "5+ Years",
        isPrimary: true,
        description: "Firebase Authentication, Firestore Realtime listeners, Cloud Messaging (FCM) for mobile/web push notifications.",
        projects: ["IoT Monitoring Platform", "Butwal Cricket Platform"],
        highlights: [
          "Real-time sensor telemetry streaming and live match updates",
          "FCM payload formatting for iOS & Android app alerts"
        ]
      },
      {
        name: "Google Cloud Platform",
        level: "Proficient",
        years: "4+ Years",
        isPrimary: false,
        description: "Deploying and managing cloud resources, Cloud Run, Cloud Storage buckets, and IAM permissions.",
        projects: ["Cloud Hosted Applications"],
        highlights: [
          "Containerized web application deployment and monitoring"
        ]
      }
    ]
  },
  {
    category: "DevOps & Developer Tools",
    iconName: "Wrench",
    description: "Version control, dependency managers, containerization, API documentation, and testing tools.",
    skills: ["Git", "Composer", "npm", "Docker", "Postman", "Swagger / OpenAPI", "Linux / Bash"],
    detailedSkills: [
      {
        name: "Git & Version Control",
        level: "Expert",
        years: "10+ Years",
        isPrimary: true,
        description: "Git branching workflows (GitFlow, feature branches), pull request reviews, and release tagging.",
        projects: ["All Enterprise & Freelance Projects"],
        highlights: [
          "Collaboration with remote engineering teams in Japan & Nepal"
        ]
      },
      {
        name: "Docker & Containerization",
        level: "Proficient",
        years: "4+ Years",
        isPrimary: false,
        description: "Dockerizing PHP, Nginx, MySQL, and Redis microservices for uniform development and production deployments.",
        projects: ["Enterprise Application Environments"],
        highlights: [
          "Dockerfile and docker-compose configurations"
        ]
      },
      {
        name: "Postman & OpenAPI / Swagger",
        level: "Expert",
        years: "8+ Years",
        isPrimary: true,
        description: "Interactive API testing, automated collection runners, environment variables, and Swagger specification writing.",
        projects: ["RESTful API Projects"],
        highlights: [
          "Clear API contracts for mobile & frontend developer handoffs"
        ]
      }
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    label: "10+ Years",
    subtext: "Professional Software Engineering Experience",
    iconName: "Award",
    //highlight: true
  },
  {
    label: "20+ Global Projects",
    subtext: "Enterprise Systems, CRM, WordPress & eCommerce Delivered",
    iconName: "Briefcase"
  },
  // {
  //   label: "REST API & Plugin Specialist",
  //   subtext: "High-Performance Endpoint Architecture & Integrations",
  //   iconName: "Zap"
  // },
  {
    label: "Backend Architecture",
    subtext: "SOLID Principles, Repository Pattern & Design Patterns",
    iconName: "Cpu"
  },
  {
    label: "Performance Optimization",
    subtext: "SQL Query Tuning, Caching",
    iconName: "TrendingUp"
  },
  {
    label: "Professional Developer (Full time)",
    subtext: "Application development for Japanese Enterprises",
    iconName: "Globe"
  },
  {
    label: "Freelance Developer (in Free time)",
    subtext: "Develop local projects and client projects",
    iconName: "Globe"
  },
];


export const CONTACT_DATA: ContactInfo = {
  email: "shakya.niral@gmail.com",
  phone: "+977 980-0000000",
  linkedIn: "https://linkedin.com/in/niral-shakya",
  portfolio: "https://niralshakya.com.np",
  location: "Butwal, Nepal"
};

export const CODE_SAMPLE_DEFAULT = {
  title: "Laravel Service Repository Pattern & Clean Architecture",
  description: "A clean, maintainable backend implementation decoupling business logic from request handling with strict type safety and transaction safety.",
  code: `<?php

namespace App\\Repositories\\Eloquent;

use App\\Models\\Order;
use App\\Repositories\\Contracts\\OrderRepositoryInterface;
use Illuminate\\Support\\Collection;
use Illuminate\\Support\\Facades\\DB;

class OrderRepository implements OrderRepositoryInterface
{
    /**
     * Create an enterprise order with transactional integrity.
     */
    public function createWithItems(array $orderData, array $items): Order
    {
        return DB::transaction(function () use ($orderData, $items) {
            $order = Order::create([
                'user_id'         => $orderData['user_id'],
                'order_number'    => 'ORD-' . strtoupper(uniqid()),
                'total_amount'    => $orderData['total_amount'],
                'currency'        => $orderData['currency'] ?? 'JPY',
                'status'          => 'pending',
                'payment_gateway' => $orderData['gateway']
            ]);

            foreach ($items as $item) {
                $order->items()->create([
                    'product_id' => $item['product_id'],
                    'quantity'   => $item['quantity'],
                    'unit_price' => $item['unit_price']
                ]);
            }

            return $order->load('items');
        });
    }

    /**
     * Retrieve aggregated monthly metrics for enterprise analytics dashboard.
     */
    public function getMonthlyMetrics(int $year): Collection
    {
        return DB::table('orders')
            ->selectRaw('MONTH(created_at) as month, COUNT(*) as total_orders, SUM(total_amount) as total_revenue')
            ->whereYear('created_at', $year)
            ->where('status', 'settled')
            ->groupBy('month')
            ->orderBy('month')
            ->get();
    }
}`
};
