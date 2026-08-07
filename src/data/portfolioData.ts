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
  title: "Senior PHP / Laravel Backend Developer",
  subtitle: "Building scalable enterprise applications, RESTful APIs, and high-performance backend systems for over 10 years.",
  statusText: "Available for Senior & Technical Lead Roles",
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
  summary: "Senior PHP Developer with 10+ years of experience developing enterprise applications for Japanese clients.",
  specializations: [
    "Core PHP",
    "Laravel",
    "REST APIs",
    "MySQL",
    "PostgreSQL",
    "System Architecture",
    "Database Design",
    "Performance Optimization"
  ],
  sdlcNote: "Experienced throughout the Software Development Life Cycle, from requirements gathering to deployment and maintenance.",
  highlights: [
    {
      title: "Enterprise Systems Architecture",
      desc: "Designed scalable, modular backend structures adhering to SOLID principles & Repository patterns."
    },
    {
      title: "Japanese Client Delivery",
      desc: "Direct technical collaboration with Japanese engineering stakeholders with high quality standards."
    },
    {
      title: "API & Payment Integration",
      desc: "Expertise in complex payment pipelines (Stripe, GMO Payment Gateway, SoftBank) and Firebase services."
    }
  ]
};

export const CORE_EXPERTISE: ExpertiseCategory[] = [
  {
    title: "Backend Development",
    iconName: "Server",
    description: "Robust, high-throughput server architecture and seamless third-party service integration.",
    skills: ["Core PHP", "Laravel", "REST API", "Authentication", "Payment Integration"]
  },
  {
    title: "Database",
    iconName: "Database",
    description: "High-performance data layer design, index tuning, and efficient query optimization.",
    skills: ["MySQL", "PostgreSQL", "Schema Design", "Query Optimization"]
  },
  {
    title: "Architecture",
    iconName: "Cpu",
    description: "Maintainable enterprise codebases structured for longevity and scalability.",
    skills: ["SOLID", "Design Patterns", "MVC", "Repository Pattern", "Microservices"]
  },
  {
    title: "Cloud",
    iconName: "Cloud",
    description: "Cloud-native backend deployments and real-time event distribution.",
    skills: ["Google Cloud Platform", "Firebase", "FCM", "Cloud Functions"]
  },
  {
    title: "Frontend",
    iconName: "Layout",
    description: "Full-stack integration for interactive dashboards and enterprise administrative portals.",
    skills: ["Angular", "JavaScript", "Bootstrap", "jQuery"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Senior Programmer",
    company: "Miracle Interface Pvt. Ltd.",
    period: "2014 — Present",
    location: "Nepal / Remote for Japanese Enterprise Clients",
    highlights: [
      "Developed enterprise CRM, CMS and eCommerce systems with strict performance SLAs.",
      "Built scalable REST APIs powering web, mobile apps, and third-party microservices.",
      "Designed robust backend architecture using Laravel & Yii frameworks.",
      "Integrated Stripe, Firebase, FCM, and major Japanese payment gateways (GMO, SoftBank Payment).",
      "Optimized complex SQL queries and relational database schemas to dramatically improve query response times.",
      "Mentored junior developers on code quality, design patterns, and unit testing standards.",
      "Collaborated directly with Japanese clients on system specification, delivery, and system maintenance."
    ],
    techStack: ["PHP", "Laravel", "Yii", "MySQL", "PostgreSQL", "REST APIs", "Firebase", "Angular", "Docker"]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "ecommerce-platform",
    title: "Enterprise eCommerce Platform",
    tags: ["Laravel", "Yii", "MySQL", "Japanese Gateways"],
    category: "eCommerce",
    description: "Enterprise eCommerce platform featuring inventory management, subscriptions, coupons, reward points, commissions, and Japanese payment gateway integration.",
    longDescription: "A comprehensive multi-tenant eCommerce engine engineered for high-volume transactions and complex pricing rules. Features integrated inventory tracking across warehouses, automated recurring subscription billing, tiered reward point distribution, and custom commission structures.",
    keyFeatures: [
      "Multi-tier subscription billing engine with automated retry workflows",
      "Japanese payment gateway integrations (GMO, SoftBank Payment, VeriTrans)",
      "Coupons & dynamic commission calculations for affiliate marketing",
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
            'status' => 'settled',
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
    tags: ["Yii", "Angular", "RBAC", "Reporting"],
    category: "Resource Mgmt",
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
    tags: ["Laravel", "Firebase", "Real-time", "IoT"],
    category: "IoT",
    description: "Industrial monitoring platform with real-time dashboards and cloud-connected IoT devices.",
    longDescription: "An industrial IoT platform collecting telemetry data from physical sensor nodes, visualizing environmental parameters in real-time, and firing automated safety alerts.",
    keyFeatures: [
      "Real-time sensor telemetry ingestion and state persistence",
      "Live updating web dashboard powered by Firebase Realtime DB",
      "Threshold alert engine with automated email & SMS triggers",
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
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    iconName: "Code",
    skills: ["PHP (7.x / 8.x)", "Java", "JavaScript (ES6+)"]
  },
  {
    category: "Frameworks",
    iconName: "Layers",
    skills: ["Laravel", "Spring Boot", "Yii Framework", "Angular"]
  },
  {
    category: "Database",
    iconName: "Database",
    skills: ["MySQL", "PostgreSQL", "Firestore", "Redis Cache"]
  },
  {
    category: "Cloud & Services",
    iconName: "Cloud",
    skills: ["Google Cloud Platform", "Firebase", "FCM Push Notifications", "Cloud Functions"]
  },
  {
    category: "Tools & DevOps",
    iconName: "Wrench",
    skills: ["Git", "Composer", "Docker", "Postman", "Swagger / OpenAPI"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    label: "10+ Years",
    subtext: "Professional Software Engineering Experience",
    iconName: "Award",
    highlight: true
  },
  {
    label: "20+ Enterprise Projects",
    subtext: "CRM, eCommerce, IoT & Booking Platforms Delivered",
    iconName: "Briefcase"
  },
  {
    label: "REST API Specialist",
    subtext: "High-Performance Endpoint Architecture & Integrations",
    iconName: "Zap"
  },
  {
    label: "Japanese Enterprise Clients",
    subtext: "10 Years of Direct International Delivery & Standards",
    iconName: "Globe"
  },
  {
    label: "Backend Architecture",
    subtext: "SOLID Principles, Repository Pattern & Design Patterns",
    iconName: "Cpu"
  },
  {
    label: "Performance Optimization",
    subtext: "SQL Query Tuning, Index Optimization & Caching",
    iconName: "TrendingUp"
  }
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
